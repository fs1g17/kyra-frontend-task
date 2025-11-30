"use client";

import { useMemo } from "react";
import useGetAsset from "./_hooks/useGetAsset";
import Navbar from "./_components/navbar";

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
    <div className="flex flex-col">
      <Navbar />
    </div>
  );
}
