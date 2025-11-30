import { Asset, AssetStatus } from "@/types/asset";
import { useMemo } from "react";
import AssetCard from "./asset-card";

const assetStatusTitleMap: {
  [key: string]: string;
} = {
  AWAITING_ASSET: "Awaiting asset",
  PENDING_ADMIN_REVIEW: "Needs admin review",
  PENDING_BRAND_REVIEW: "In brand review",
  REJECTED: "Rejected (awaiting edits)",
  APPROVED: "Approved",
};

export default function AssetCardGroup({
  status,
  selectedStatus,
  assets,
}: {
  status: AssetStatus;
  selectedStatus: AssetStatus | null;
  assets: Asset[];
}) {
  const group = assets.filter((asset) => asset.status === status);

  if (
    group.length === 0 ||
    (selectedStatus !== null && selectedStatus !== status)
  ) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="font-bold text-lg">{assetStatusTitleMap[status]}</div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {group.map((asset) => (
          <AssetCard asset={asset} />
        ))}
      </div>
    </div>
  );
}
