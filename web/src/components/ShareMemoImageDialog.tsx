import { DownloadIcon, Loader2Icon, X } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Memo } from "@/types/proto/api/v1/memo_service";
import { downloadImage, getMemoImageFilename } from "@/utils/download";
import { useTranslate } from "@/utils/i18n";

/**
 * ShareMemoImageDialog - 展示生成的分享图片并提供下载功能
 *
 * 功能:
 * - 全屏预览生成的分享图片
 * - 下载按钮保存图片
 * - 支持右键菜单（复制/保存）
 * - ESC键关闭
 */
interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageUrl: string;
  memo: Memo;
  isGenerating?: boolean;
}

const ShareMemoImageDialog: React.FC<Props> = ({ open, onOpenChange, imageUrl, memo, isGenerating = false }) => {
  const t = useTranslate();

  const handleDownload = () => {
    const filename = getMemoImageFilename(memo);
    downloadImage(imageUrl, filename);
    toast.success(t("message.image-downloaded"));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 !max-w-[800px]" showCloseButton={false}>
        {/* 隐藏的标题用于可访问性 */}
        <DialogTitle className="sr-only">{t("common.share")}</DialogTitle>

        {/* 关闭按钮 */}
        <div className="absolute top-4 right-4 z-10">
          <Button onClick={() => onOpenChange(false)} variant="secondary" size="icon" className="rounded-full" aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* 图片容器 */}
        <div className="w-full p-2 bg-gray-100 rounded-t-lg">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2Icon className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm text-gray-500">{t("message.generating-share-image")}</p>
            </div>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt="Share image"
              className="w-full h-auto rounded-lg shadow-lg"
              onContextMenu={() => {
                // 允许右键菜单（浏览器原生）
                // 不阻止默认行为，用户可以右键复制或保存
              }}
            />
          ) : null}
        </div>

        {/* 操作栏 */}
        {!isGenerating && imageUrl && (
          <div className="flex items-center justify-between p-4 border-t">
            <p className="text-sm text-gray-500">{t("message.right-click-to-copy-or-save")}</p>
            <Button onClick={handleDownload}>
              <DownloadIcon className="w-4 h-4 mr-2" />
              {t("common.save-image")}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ShareMemoImageDialog;
