import { head } from "lodash-es";
import React from "react";
import { cn } from "@/lib/utils";
import { ListNode_Kind, Node, NodeType } from "@/types/proto/api/v1/markdown_service";
import Renderer from "./Renderer";

interface Props {
  index: string;
  kind: ListNode_Kind;
  indent: number;
  children: Node[];
}

const List: React.FC<Props> = ({ kind, indent, children }: Props) => {
  let prevNode: Node | null = null;
  let skipNextLineBreakFlag = false;

  const getListContainer = () => {
    switch (kind) {
      case ListNode_Kind.ORDERED:
        return "ol";
      case ListNode_Kind.UNORDERED:
        return "ul";
      case ListNode_Kind.DESCRIPTION:
        return "dl";
      default:
        return "div";
    }
  };

  const getAttributes = () => {
    const attrs: any = {
      style: { paddingLeft: `${indent > 0 ? indent * 10 : 20}px` },
    };
    const firstChild = head(children);
    if (firstChild?.type === NodeType.ORDERED_LIST_ITEM) {
      attrs.start = firstChild.orderedListItemNode?.number;
    } else if (firstChild?.type === NodeType.TASK_LIST_ITEM) {
      attrs.style = { paddingLeft: `${indent * 8}px` };
    }
    return attrs;
  };

  // Check if this is a task list to avoid displaying list markers
  // Need to check:
  // 1. If children contain TASK_LIST_ITEM (properly parsed)
  // 2. If children contain UNORDERED_LIST_ITEM with [ ] text (mis-parsed by backend)
  const isTaskList = children.some((child) => {
    if (child.type === NodeType.TASK_LIST_ITEM) {
      return true;
    }
    // Check if this is a mis-parsed task list item (UNORDERED_LIST_ITEM with [ ] text)
    if (child.type === NodeType.UNORDERED_LIST_ITEM && child.unorderedListItemNode?.children) {
      const firstGrandchild = child.unorderedListItemNode.children[0];
      return (
        firstGrandchild &&
        firstGrandchild.type === NodeType.TEXT &&
        firstGrandchild.textNode?.content &&
        /^\s*\[\s*[xX]?\s*\]\s*/.test(firstGrandchild.textNode.content)
      );
    }
    return false;
  });

  return React.createElement(
    getListContainer(),
    {
      className: cn(
        isTaskList
          ? "list-none"
          : kind === ListNode_Kind.ORDERED
            ? "list-decimal"
            : kind === ListNode_Kind.UNORDERED
              ? "list-disc"
              : "list-none",
      ),
      ...getAttributes(),
    },
    children.map((child, index) => {
      if (prevNode?.type !== NodeType.LINE_BREAK && child.type === NodeType.LINE_BREAK && skipNextLineBreakFlag) {
        skipNextLineBreakFlag = false;
        return null;
      }

      prevNode = child;
      skipNextLineBreakFlag = true;
      return <Renderer key={`${child.type}-${index}`} index={String(index)} node={child} />;
    }),
  );
};

export default List;
