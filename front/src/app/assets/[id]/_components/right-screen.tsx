"use client";

import { useState } from "react";
import { Asset, AssetTab } from "@/types/asset";
import { cn } from "@/lib/utils";

export default function RightScreen({ asset }: { asset: Asset }) {
  const [tab, selectTab] = useState<AssetTab>(AssetTab.OVERVIEW);

  return (
    <div className="w-full flex-col h-full">
      <div className="w-full flex border-b border-gray-600 pl-3">
        {Object.values(AssetTab).map((value) => (
          <Tab value={value} selected={value === tab} selectValue={selectTab} />
        ))}
      </div>
      <div className="w-full h-full">

      </div>
    </div>
  );
}

function Tab({
  value,
  selected,
  selectValue,
}: {
  value: AssetTab;
  selected: boolean;
  selectValue: (tab: AssetTab) => void;
}) {
  return (
    <div
      onClick={() => selectValue(value)}
      className={cn(
        "p-2 hover:cursor-pointer",
        selected ? "text-[#BAEF44] border-b border-[#BAEF44]" : "text-gray-200"
      )}
    >
      {value}
    </div>
  );
}
