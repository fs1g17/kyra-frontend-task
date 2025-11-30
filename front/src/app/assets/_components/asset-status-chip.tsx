import { cn } from "@/lib/utils";
import { AssetStatus } from "@/types/asset";
import { ASSET_STATUS_CONFIG } from "@/constants/asset-status";

export default function AssetStatusChip({ status }: { status: AssetStatus }) {
  return (
    <div
      className={cn(
        "w-full max-w-[200px] flex items-center px-1 py-0 rounded-lg",
        ASSET_STATUS_CONFIG[status].chipStyle
      )}
    >
      {ASSET_STATUS_CONFIG[status].icon}
      <span className="ml-1 font-semibold">{ASSET_STATUS_CONFIG[status].name}</span>
    </div>
  );
}
