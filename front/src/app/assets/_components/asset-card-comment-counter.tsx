"use client";

import { MessageSquare } from "lucide-react";
import useGetNumberOfComments from "../_hooks/useGetNumberOfComments";

export default function AssetCardCommentCounter({
  assetId,
}: {
  assetId: number;
}) {
  const { data, isPending, isError } = useGetNumberOfComments({ assetId });

  if (!data) {
    return null;
  }

  return (
    <div className="flex items-center text-sm gap-x-2.5">
      <MessageSquare className="w-4 h-4 text-white" />
      <div>{data}</div>
    </div>
  );
}
