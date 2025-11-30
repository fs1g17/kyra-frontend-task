import { AssetStatus } from "@/types/asset";
import { ClockIcon, CircleAlert, CircleCheck, X } from "lucide-react";

export const ASSET_STATUS_CONFIG: Record<
  AssetStatus,
  {
    name: string;
    icon: React.ReactNode;
    chipStyle: string;
    selectorStyle: string;
  }
> = {
  AWAITING_ASSET: {
    name: "Awaiting Asset",
    icon: <ClockIcon className="w-3 h-3 text-inherit" />,
    chipStyle: "bg-[#8397AD] text-black",
    selectorStyle: "bg-[#8397AD]",
  },
  PENDING_ADMIN_REVIEW: {
    name: "Needs Admin Review",
    icon: <CircleAlert className="w-3 h-3 text-inherit" />,
    chipStyle: "bg-[#442A00] border border-[#7B6548] text-[#F4A930]",
    selectorStyle: "bg-[#BA842E]",
  },
  PENDING_BRAND_REVIEW: {
    name: "In Brand Review",
    icon: <ClockIcon className="w-3 h-3" />,
    chipStyle: "bg-[#9A82B0]",
    selectorStyle: "bg-[#9A82B0]",
  },
  REJECTED: {
    name: "Rejected",
    icon: <X className="w-3 h-3" />,
    chipStyle: "bg-[#BB5264]",
    selectorStyle: "bg-[#BB5264]",
  },
  APPROVED: {
    name: "Approved",
    icon: <CircleCheck className="w-3 h-3 text-inherit" />,
    chipStyle: "bg-[#BAEF44] text-black",
    selectorStyle: "bg-[#83A18A]",
  },
};


