"use client";

import Navbar from "./_components/navbar";
import useGetAsset from "./_hooks/useGetAsset";
import LeftScreen from "./_components/left-screen";
import RightScreen from "./_components/right-screen";

export default function AssetPage({
  params,
}: {
  params: { [key: string]: string };
}) {
  const id = params["id"];

  const { data, isPending, isError } = useGetAsset({ id });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>There was an error getting asset with id: {id}</div>;
  }

  return (
    <div className="flex flex-col h-[100vh] bg-[#111013]">
      <Navbar />
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
