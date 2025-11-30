import { cn } from "@/lib/utils";
import { AssetStatus, ASSET_STATUSES } from "@/types/asset-status";

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
  BRAND_REVIEW: {
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

export default function StatusSelector() {
  return (
    <div className="w-full flex overflow-x-auto bg-[#1A1A1A] rounded-md p-1">
      <div
        className={cn(
          "flex gap-x-2.5 p-2 items-center shrink-0 rounded-md",
          true ? "bg-[#35343C]" : "bg-[#1A1A1A]"
        )}
      >
        All
        <div>{0}</div>
      </div>

      {ASSET_STATUSES.map((status) => (
        <StatusButton status={status} amount={0} selected={false} />
      ))}
    </div>
  );
}

function StatusButton({
  status,
  amount,
  selected,
}: {
  status: AssetStatus;
  amount: number;
  selected: boolean;
}) {
  return (
    <div
      className={cn(
        "flex gap-x-2.5 px-2 py-1 items-center shrink-0 rounded-md",
        selected ? "bg-[#35343C]" : "bg-[#1A1A1A]"
      )}
    >
      <div className={cn("w-3 h-3", AssetStatusMap[status].style)} />
      {AssetStatusMap[status].name}
      <div>{amount}</div>
    </div>
  );
}
