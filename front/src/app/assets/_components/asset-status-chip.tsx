import { cn } from "@/lib/utils";
import { AssetStatus } from "@/types/asset";
import {
  CheckIcon,
  CircleAlert,
  CircleCheck,
  ClockIcon,
  CrossIcon,
  X,
} from "lucide-react";

export const AssetStatusMap: {
  [key: string]: { icon: React.ReactNode; text: string; style: string };
} = {
  AWAITING_ASSET: {
    icon: <ClockIcon className="w-3 h-3 text-inherit" />,
    text: "Awaiting Asset",
    style: "bg-[#8397AD] text-black",
  },
  PENDING_ADMIN_REVIEW: {
    icon: <CircleAlert className="w-3 h-3 text-inherit" />,
    text: "Pending Admin Review",
    style: "bg-[#442A00] border border-[#7B6548] text-[#F4A930]",
  },
  PENDING_BRAND_REVIEW: {
    icon: <ClockIcon className="w-3 h-3" />,
    text: "Pending Brand Review",
    style: "bg-[#9A82B0]",
  },
  REJECTED: {
    icon: <X className="w-3 h-3" />,
    text: "Rejected",
    style: "bg-[#BB5264]",
  },
  APPROVED: {
    icon: <CircleCheck className="w-3 h-3 text-inherit" />,
    text: "Approved",
    style: "bg-[#BAEF44] text-black",
  },
};

export default function AssetStatusChip({ status }: { status: AssetStatus }) {
  return (
    <div
      className={cn(
        "w-full max-w-[200px] flex items-center px-1 py-0 rounded-lg",
        AssetStatusMap[status].style
      )}
    >
      {AssetStatusMap[status].icon}
      <span className="ml-1 font-semibold">{AssetStatusMap[status].text}</span>
    </div>
  );
}
