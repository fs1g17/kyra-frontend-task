import { Asset } from "@/types/asset";
import AssetCardCreator from "./asset-card-creator";
import Link from "next/link";

export default function AssetCard({ asset }: { asset: Asset }) {
  return (
    <Link href={`/assets/${asset.id}`}>
      <div
        className="w-full max-w-sm aspect-[435/631] bg-cover bg-center rounded-lg p-2 flex flex-col justify-between"
        style={{ backgroundImage: `url(${asset.thumbnailUrl})` }}
      >
        <div>hello</div>
        <AssetCardCreator
          creator={asset.creator}
          deliverable={asset.deliverable}
        />
      </div>
    </Link>
  );
}
