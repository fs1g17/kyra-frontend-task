export type AssetStatus =
  | "AWAITING_ASSET"
  | "PENDING_ADMIN_REVIEW"
  | "BRAND_REVIEW"
  | "REJECTED"
  | "APPROVED";

export const ASSET_STATUSES: AssetStatus[] = [
  "AWAITING_ASSET",
  "PENDING_ADMIN_REVIEW",
  "BRAND_REVIEW",
  "REJECTED",
  "APPROVED",
];

export interface AssetCreator {
  id: number;
  handle: string;
  name: string;
  profilePictureUrl: string;
}

export interface AssetDeliverable {
  id: number;
  brief: {
    id: number;
    name: string;
  };
  title: string;
  deadline: string;
  submissionOrigin: string;
  fees: number;
}

export interface Asset {
  id: number;
  creator: AssetCreator;
  assetUrl: string;
  thumbnailUrl: string;
  caption: string;
  soundUrl: string;
  status: AssetStatus;
  deliverable: AssetDeliverable;
}
