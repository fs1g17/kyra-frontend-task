"use client";

import { useState } from "react";
import { Asset, AssetTab } from "@/types/asset";
import { cn } from "@/lib/utils";
import Overview from "./overview";
import Messages from "./messages";

export default function RightScreen({ asset }: { asset: Asset }) {
  const [tab, selectTab] = useState<AssetTab>(AssetTab.OVERVIEW);

  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full flex border-b border-gray-600 pl-2">
        {Object.values(AssetTab).map((value) => (
          <Tab key={value} value={value} selected={value === tab} selectValue={selectTab} />
        ))}
      </div>
      <div className="w-full h-full">
        {tab === AssetTab.OVERVIEW && (
          <Overview deliverable={asset.deliverable} />
        )}
        {tab === AssetTab.MESSAGES && <Messages assetId={asset.id} />}
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
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={() => selectValue(value)}
      className={cn(
        "p-2",
        selected ? "text-accent-lime border-b border-accent-lime" : "text-gray-200"
      )}
    >
      {value}
    </button>
  );
}
