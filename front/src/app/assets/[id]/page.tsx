"use client";

import Navbar from "./_components/navbar";
import useGetAsset from "./_hooks/useGetAsset";
import LeftScreen from "./_components/left-screen";
import RightScreen from "./_components/right-screen";
import { Skeleton } from "@/components/ui/skeleton";

export default function AssetPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const { data, isPending, isError } = useGetAsset({ id });

  if (isPending) {
    return (
      <div className="flex flex-col h-[100vh] bg-surface-dark">
        <div className="w-full border-b border-gray-600 py-4 px-2 bg-black">
          <Skeleton className="h-6 w-32 mx-auto" />
        </div>
        <div className="flex gap-4 h-full p-2">
          <div className="w-full md:w-2/3 flex flex-col gap-y-2.5">
            <div className="flex justify-end gap-x-2.5">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-8 w-24" />
            </div>
            <div className="flex gap-x-2.5 justify-center">
              <Skeleton className="aspect-[9/16] w-1/2 max-w-[300px]" />
              <Skeleton className="aspect-[9/16] w-1/2 max-w-[300px]" />
            </div>
          </div>
          <div className="hidden md:block md:w-1/3 md:border-l md:border-gray-600 p-4">
            <Skeleton className="h-8 w-full mb-4" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return <div>There was an error getting asset with id: {id}</div>;
  }

  return (
    <div className="flex flex-col h-[100vh] bg-surface-dark">
      <Navbar asset={data} />
      <div className="flex gap-4 h-full">
        <div className="w-full md:w-2/3 p-2">
          <LeftScreen asset={data} />
        </div>

        <div className="hidden md:block md:w-1/3 md:border-l md:border-gray-600">
          <RightScreen asset={data} />
        </div>
      </div>
    </div>
  );
}
