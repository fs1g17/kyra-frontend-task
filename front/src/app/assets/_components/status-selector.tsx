import { cn } from "@/lib/utils";
import { AssetStatus, ASSET_STATUSES } from "@/types/asset";
import { useMemo } from "react";

export const AssetStatusMap: {
  [key: string]: { name: string; style: string };
} = {
  AWAITING_ASSET: {
    name: "Awaiting asset",
    style: "bg-[#8397AD]",
  },
  PENDING_ADMIN_REVIEW: {
    name: "Needs admin review",
    style: "bg-[#BA842E]",
  },
  PENDING_BRAND_REVIEW: {
    name: "In brand review",
    style: "bg-[#9A82B0]",
  },
  REJECTED: {
    name: "Rejected (awaiting edits)",
    style: "bg-[#BB5264]",
  },
  APPROVED: {
    name: "Approved",
    style: "bg-[#83A18A]",
  },
};

export default function StatusSelector({
  count,
  selectedStatus,
  setSelectedStatus,
}: {
  count: { [key: string]: number };
  selectedStatus: AssetStatus | null;
  setSelectedStatus: (status: AssetStatus | null) => void;
}) {
  const total = useMemo(() => {
    return Object.values(count).reduce((prev, curr) => prev + curr, 0);
  }, [count]);

  return (
    <div className="w-full flex overflow-x-auto bg-[#1A1A1A] rounded-md p-1">
      <StatusButton
        amount={total}
        selected={selectedStatus === null}
        name="All"
        onSelect={() => setSelectedStatus(null)}
      />

      {ASSET_STATUSES.map((status) => (
        <StatusButton
          amount={count[status]}
          selected={selectedStatus === status}
          name={AssetStatusMap[status].name}
          highlight={AssetStatusMap[status].style}
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
    <div
      className={cn(
        "flex gap-x-2.5 px-2 py-1 items-center shrink-0 rounded-md hover:cursor-pointer",
        selected ? "bg-[#35343C]" : "bg-[#1A1A1A]"
      )}
      onClick={onSelect}
    >
      {highlight && <div className={cn("w-3 h-3", highlight)} />}
      {name}
      <div>{amount}</div>
    </div>
  );
}
