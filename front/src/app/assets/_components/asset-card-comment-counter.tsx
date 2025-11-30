"use client";

import { MessageSquare } from "lucide-react";

export default function AssetCardCommentCounter({
  commentCount,
}: {
  commentCount: number;
}) {
  if (!commentCount) {
    return null;
  }

  return (
    <div className="flex items-center text-sm gap-x-2.5">
      <MessageSquare className="w-4 h-4 text-white" />
      <div>{commentCount}</div>
    </div>
  );
}
