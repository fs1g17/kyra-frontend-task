import { Asset } from "@/types/asset";
import VideoCard from "./video-card";
import ThumbnailCard from "./thumbnail-card";
import SoundUsedInput from "./sound-used-input";
import CreatorsCaptionInput from "./creators-caption-input";
import { Button } from "@/components/ui/button";
import EditStatusDialog from "./edit-status-dialog";
import AssetStatusChip from "../../_components/asset-status-chip";

export default function LeftScreen({ asset }: { asset: Asset }) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <div className="w-full flex justify-end gap-x-2.5">
        <AssetStatusChip status={asset.status} />
        <EditStatusDialog asset={asset} />
      </div>
      <div className="flex gap-x-2.5 justify-center">
        <VideoCard videoUrl={asset.assetUrl} />
        <ThumbnailCard thumbnailUrl={asset.thumbnailUrl} />
      </div>
      <SoundUsedInput soundUrl={asset.soundUrl} />
      <CreatorsCaptionInput caption={asset.caption} />
    </div>
  );
}
