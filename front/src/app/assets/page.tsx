"use client";

import { useMemo, useState } from "react";
import StatusSelector from "./_components/status-selector";
import { ASSET_STATUSES, AssetStatus } from "@/types/asset";
import useGetAssets from "./_hooks/useGetAssets";
import AssetCardGroup from "./_components/asset-card-group";
import { Skeleton } from "@/components/ui/skeleton";

export default function Assets() {
  const [selectedStatus, setSelectedStatus] = useState<AssetStatus | null>(
    null
  );

  const { data, isPending, isError } = useGetAssets();

  const count = useMemo(() => {
    const val: Record<AssetStatus, number> = {
      AWAITING_ASSET: 0,
      PENDING_ADMIN_REVIEW: 0,
      PENDING_BRAND_REVIEW: 0,
      REJECTED: 0,
      APPROVED: 0,
    };

    data?.forEach((asset) => {
      val[asset.status] += 1;
    });

    return val;
  }, [data]);

  if (isPending) {
    return (
      <div className="flex flex-col gap-y-5 p-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-full" />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="aspect-[435/631] w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (!data || isError) {
    return <div>Failed to get data</div>;
  }

  return (
    <div className="flex flex-col gap-y-5 p-4">
      <h1 className="font-bold text-xl">#KyraChallenge</h1>
      <StatusSelector
        count={count}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      {ASSET_STATUSES.map((status) => (
        <AssetCardGroup
          key={status}
          status={status}
          assets={data}
          selectedStatus={selectedStatus}
        />
      ))}
    </div>
  );
}
