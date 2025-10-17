import { Memo } from "@/types/proto/api/v1/memo_service";

/**
 * 下载图片到本地
 *
 * @param imageUrl - 图片的 Data URL 或普通 URL
 * @param filename - 下载的文件名
 *
 * @example
 * ```typescript
 * downloadImage(imageUrl, "memo-123-1699999999.png");
 * ```
 */
export function downloadImage(imageUrl: string, filename: string) {
  // 创建临时 <a> 元素
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = filename;

  // 触发点击下载
  document.body.appendChild(link);
  link.click();

  // 清理
  document.body.removeChild(link);
}

/**
 * 生成Memo图片的文件名
 *
 * 格式: memo-{memoId}-{timestamp}.png
 *
 * @param memo - Memo对象
 * @returns 文件名字符串
 *
 * @example
 * ```typescript
 * getMemoImageFilename(memo) // => "memo-123-1699999999.png"
 * ```
 */
export function getMemoImageFilename(memo: Memo): string {
  const timestamp = new Date().getTime();
  const memoId = memo.name.split("/").pop() || "memo";
  return `memo-${memoId}-${timestamp}.png`;
}
