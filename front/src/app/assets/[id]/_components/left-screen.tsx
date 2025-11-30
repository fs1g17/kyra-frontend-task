import { Asset } from "@/types/asset";
import VideoCard from "./video-card";
import ThumbnailCard from "./thumbnail-card";
import SoundUsedInput from "./sound-used-input";
import CreatorsCaptionInput from "./creators-caption-input";

export default function LeftScreen({ asset }: { asset: Asset }) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <div className="flex gap-x-2.5 justify-center">
        <VideoCard videoUrl={asset.assetUrl} />
        <ThumbnailCard thumbnailUrl={asset.thumbnailUrl} />
      </div>
      <SoundUsedInput soundUrl={asset.soundUrl} />
      <CreatorsCaptionInput caption={asset.caption} />
    </div>
  );
}
