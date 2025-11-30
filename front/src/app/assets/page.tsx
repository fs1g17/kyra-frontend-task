"use client";

import { useState } from "react";
import StatusSelector from "./_components/status-selector";
import { AssetStatus } from "@/types/asset";
import useGetAssets from "./_hooks/useGetAssets";

export default function Assets() {
  const [selectedStatus, setSelectedStatus] = useState<AssetStatus | null>(
    null
  );

  const { data } = useGetAssets();

  console.log(data);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl">#KyraChallenge</h1>
      <StatusSelector
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
    </div>
  );
}
