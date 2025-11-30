import { ChevronLeft, MenuIcon } from "lucide-react";
import Link from "next/link";
import MobileDrawer from "./mobile-drawer";
import { Asset } from "@/types/asset";

export default function Navbar({ asset }: { asset: Asset }) {
  return (
    <div className="relative w-full border-b border-gray-600 py-4 px-2 bg-black">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-3">
        <Link href="/assets">
          <ChevronLeft />
        </Link>
      </div>

      <div className="text-center font-medium">#KyraChallenge</div>

      <MobileDrawer asset={asset} />
    </div>
  );
}
