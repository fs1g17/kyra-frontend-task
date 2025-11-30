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
