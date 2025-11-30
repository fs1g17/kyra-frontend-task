import { Asset, AssetStatus } from "@/types/asset";
import { ASSET_STATUS_CONFIG } from "@/constants/asset-status";
import AssetCard from "./asset-card";

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
      <div className="font-bold text-lg">{ASSET_STATUS_CONFIG[status].name}</div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {group.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
