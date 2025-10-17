import { memo, useEffect } from "react";
import { Memo } from "@/types/proto/api/v1/memo_service";
import MemoContent from "./MemoContent";

/**
 * MemoShareCard - 用于生成分享图片的简化Memo卡片
 *
 * 只包含核心展示元素: 时间、内容
 * 无交互元素，专门用于html2canvas截图
 *
 * 注意: 使用内联样式覆盖所有颜色，避免html2canvas解析oklch颜色失败
 */
interface Props {
  memo: Memo;
  onRendered?: () => void;
}

const MemoShareCard: React.FC<Props> = ({ memo, onRendered }) => {
  useEffect(() => {
    // 等待渲染完成后通知父组件
    if (onRendered) {
      // 使用 setTimeout 确保 DOM 渲染完成
      setTimeout(onRendered, 100);
    }
  }, [onRendered]);

  return (
    <div
      className="w-full max-w-[800px] rounded-lg memo-share-card"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "32px",
      }}
    >
      {/* 头部：时间信息 */}
      <div className="flex items-center mb-4">
        <span className="text-sm" style={{ color: "#6b7280" }}>
          {memo.displayTime?.toLocaleDateString()}
        </span>
      </div>

      {/* 内容区域 */}
      <div className="prose prose-sm max-w-none" style={{ color: "#1f2937" }}>
        <MemoContent memoName={memo.name} nodes={memo.nodes} readonly={true} compact={false} disableFilter={true} />
      </div>
    </div>
  );
};

export default memo(MemoShareCard);
