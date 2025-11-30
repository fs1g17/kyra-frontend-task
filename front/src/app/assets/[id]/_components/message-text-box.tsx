"use client";

import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

export default function MessageTextBox() {
  
  return (
    <div className="w-full border-t border-gray-600 p-2">
      <div className="relative">
        <Input className="w-full border-none bg-[#1B1A22]" />
        <button className="absolute right-2 top-1/2 -translate-y-1/2" disabled>
          <SendIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
