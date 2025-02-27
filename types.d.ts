type UploadResult = {
  fileId: string;
  name: string;
  size: number;
  versionInfo: {
    id: string;
    name: string;
  };
  filePath: string;
  url: string;
  fileType: string;
  height: string;
  width: string;
  thumbnailUrl: string;
  AITags: null;
};

type AssetMetaData = {
  id: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

type AssetsResponse = {
  success: boolean;
  meta: {
    assets: AssetMetaData[];
    totalAsset: number;
  };
};
