"use client";

import { useState } from "react";
import StatusSelector from "./_components/status-selector";
import { ASSET_STATUSES, AssetStatus } from "@/types/asset";
import useGetAssets from "./_hooks/useGetAssets";
import AssetCardGroup from "./_components/asset-card-group";

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
    <div className="flex flex-col gap-y-5 p-4">
      <h1 className="font-bold text-xl">#KyraChallenge</h1>
      <StatusSelector
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      {ASSET_STATUSES.map((status) => (
        <AssetCardGroup
          status={status}
          assets={data}
          selectedStatus={selectedStatus}
        />
      ))}
    </div>
  );
}
