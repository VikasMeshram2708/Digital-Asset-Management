import { toast } from "sonner";

export const validateFile = (file: File): boolean => {
  const ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp"];
  const ALLOWED_VIDEO_EXTENSIONS = ["mp4", "mov", "avi", "mkv"];
  const MAX_IMAGE_SIZE_MB = 20;
  const MAX_VIDEO_SIZE_MB = 100;

  const fileNameParts = file.name.split(".");
  const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

  if (file.type.startsWith("image/")) {
    if (!ALLOWED_IMAGE_EXTENSIONS.includes(fileExtension)) {
      toast.error(
        `Unsupported image format. Allowed formats: ${ALLOWED_IMAGE_EXTENSIONS.join(
          ", "
        )}`
      );
      return false;
    }
    if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      toast.error(`Image size exceeds the limit of ${MAX_IMAGE_SIZE_MB}MB`);
      return false;
    }
  }

  if (file.type.startsWith("video/")) {
    if (!ALLOWED_VIDEO_EXTENSIONS.includes(fileExtension)) {
      toast.error(
        `Unsupported video format. Allowed formats: ${ALLOWED_VIDEO_EXTENSIONS.join(
          ", "
        )}`
      );
      return false;
    }
    if (file.size > MAX_VIDEO_SIZE_MB * 1024 * 1024) {
      toast.error(`Video size exceeds the limit of ${MAX_VIDEO_SIZE_MB}MB`);
      return false;
    }
  }

  toast.success("Media file validated successfully");
  return true;
};
