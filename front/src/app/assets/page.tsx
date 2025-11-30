"use client";

import { useState } from "react";
import StatusSelector from "./_components/status-selector";
import { AssetStatus } from "@/types/asset";
import useGetAssets from "./_hooks/useGetAssets";
import AssetCard from "./_components/asset-card";

export default function Assets() {
  const [selectedStatus, setSelectedStatus] = useState<AssetStatus | null>(
    null
  );

  const { data, isPending, isError } = useGetAssets();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>Failed to get data</div>;
  }

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl">#KyraChallenge</h1>
      <StatusSelector
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <AssetCard asset={data[0]} />
    </div>
  );
}
