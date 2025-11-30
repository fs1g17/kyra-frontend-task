import { cn } from "@/lib/utils";
import { AssetStatus, ASSET_STATUSES } from "@/types/asset";
import { ASSET_STATUS_CONFIG } from "@/constants/asset-status";
import { useMemo } from "react";

export default function StatusSelector({
  count,
  selectedStatus,
  setSelectedStatus,
}: {
  count: Record<AssetStatus, number>;
  selectedStatus: AssetStatus | null;
  setSelectedStatus: (status: AssetStatus | null) => void;
}) {
  const total = useMemo(() => {
    return Object.values(count).reduce((prev, curr) => prev + curr, 0);
  }, [count]);

  return (
    <div className="w-full flex overflow-x-auto bg-surface-elevated rounded-md p-1">
      <StatusButton
        amount={total}
        selected={selectedStatus === null}
        name="All"
        onSelect={() => setSelectedStatus(null)}
      />

      {ASSET_STATUSES.map((status) => (
        <StatusButton
          key={status}
          amount={count[status]}
          selected={selectedStatus === status}
          name={ASSET_STATUS_CONFIG[status].name}
          highlight={ASSET_STATUS_CONFIG[status].selectorStyle}
          onSelect={() => setSelectedStatus(status)}
        />
      ))}
    </div>
  );
}

function StatusButton({
  amount,
  selected,
  name,
  highlight,
  onSelect,
}: {
  amount: number;
  selected: boolean;
  name: string;
  highlight?: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex gap-x-2.5 px-2 py-1 items-center shrink-0 rounded-md",
        selected ? "bg-surface-active" : "bg-surface-elevated"
      )}
      onClick={onSelect}
    >
      {highlight && <span className={cn("w-3 h-3 rounded-sm", highlight)} />}
      {name}
      <span>{amount}</span>
    </button>
  );
}
