import { AssetCreator, AssetDeliverable } from "@/types/asset";
import { GitBranchIcon, MessageSquare } from "lucide-react";
import Image from "next/image";
import AssetCardCommentCounter from "./asset-card-comment-counter";

export default function AssetCardCreator({
  assetId,
  creator,
  deliverable,
}: {
  assetId: number;
  creator: AssetCreator;
  deliverable: AssetDeliverable;
}) {
  return (
    <div className="w-full bg-black/50 p-2 rounded-md flex flex-col gap-y-2.5">
      <div className="flex items-center gap-x-2.5">
        <Image
          src={creator.profilePictureUrl}
          width={64}
          height={64}
          alt={creator.name}
          className="rounded-full"
        />
        <div className="font-bold capitalize">{creator.name}</div>
      </div>
      <div className="flex items-center text-sm gap-x-2.5">
        <GitBranchIcon className="w-4 h-4 text-white" />
        <div>{deliverable.title}</div>
      </div>
      <AssetCardCommentCounter assetId={assetId} />
    </div>
  );
}
