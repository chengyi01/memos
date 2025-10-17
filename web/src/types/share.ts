import { Memo } from "@/types/proto/api/v1/memo_service";

/**
 * Options for generating share image from Memo
 */
export interface ShareImageOptions {
  memo: Memo;
  maxWidth?: number; // 默认800px
  scale?: number; // 默认2倍分辨率
  backgroundColor?: string; // 默认'#ffffff'
}

/**
 * Result of share image generation
 */
export interface ShareImageResult {
  imageUrl: string; // Base64 Data URL
  width: number; // 图片宽度
  height: number; // 图片高度
  size: number; // 文件大小(估算)
}
