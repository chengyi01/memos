import { useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { markdownServiceClient } from "@/grpcweb";
import { cn } from "@/lib/utils";
import { memoStore } from "@/store";
import { Node, NodeType } from "@/types/proto/api/v1/markdown_service";
import Renderer from "./Renderer";
import { RendererContext } from "./types";

interface Props {
  symbol: string;
  indent: number;
  children: Node[];
}

const UnorderedListItem: React.FC<Props> = ({ children }: Props) => {
  const context = useContext(RendererContext);
  
  // Check if this is actually a task list item that was mis-parsed by the backend
  // Task list items start with [ ] or [x] or [X]
  const firstChild = children[0];
  const isTaskItem =
    firstChild &&
    firstChild.type === NodeType.TEXT &&
    firstChild.textNode?.content &&
    /^\s*\[\s*[xX]?\s*\]\s*/.test(firstChild.textNode.content);

  if (isTaskItem && firstChild.textNode) {
    const content = firstChild.textNode.content;
    const match = content.match(/^\s*\[\s*([xX]?)\s*\]\s*/);
    const isComplete = match ? match[1].toLowerCase() === "x" : false;
    const textWithoutCheckbox = content.replace(/^\s*\[\s*[xX]?\s*\]\s*/, "");

    const handleCheckboxChange = async (checked: boolean) => {
      if (context.readonly || !context.memoName) {
        return;
      }

      // Update the text node content
      const newContent = checked ? `[x] ${textWithoutCheckbox}` : `[ ] ${textWithoutCheckbox}`;
      firstChild.textNode!.content = newContent;

      const { markdown } = await markdownServiceClient.restoreMarkdownNodes({ nodes: context.nodes });
      await memoStore.updateMemo(
        {
          name: context.memoName,
          content: markdown,
        },
        ["content"],
      );
    };

    return (
      <li className={cn("w-full grid grid-cols-[24px_1fr]")}>
        <span className="w-6 h-6 flex justify-start items-center">
          <Checkbox
            className="h-4 w-4"
            checked={isComplete}
            disabled={context.readonly}
            onCheckedChange={(checked) => handleCheckboxChange(checked === true)}
          />
        </span>
        <p className={cn(isComplete && "line-through text-muted-foreground")}>
          {textWithoutCheckbox}
          {children.slice(1).map((child, index) => (
            <Renderer key={`${child.type}-${index + 1}`} index={String(index + 1)} node={child} />
          ))}
        </p>
      </li>
    );
  }

  return (
    <li>
      {children.map((child, index) => (
        <Renderer key={`${child.type}-${index}`} index={String(index)} node={child} />
      ))}
    </li>
  );
};

export default UnorderedListItem;
