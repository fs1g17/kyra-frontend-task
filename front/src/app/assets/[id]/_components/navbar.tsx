import { ChevronLeft, MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative w-full border-b border-gray-600 py-4 px-2 bg-black">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-3">
        <Link href="/assets">
          <ChevronLeft />
        </Link>
      </div>

      <div className="text-center font-medium">#KyraChallenge</div>

      <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 pl-3">
        <MenuIcon />
      </div>
    </div>
  );
}
