import clientFetch from "@/lib/client-side-fetching";
import { Asset } from "@/types/asset";
import { useQuery } from "@tanstack/react-query";

async function getAsset({ id }: { id: string }): Promise<Asset | undefined> {
  const response = await clientFetch.get<Asset[]>(`/api/assets`);
  const asset = response.data.find((asset) => asset.id + "" === id);
  return asset;
}

export default function useGetAsset({ id }: { id: string }) {
  return useQuery({
    queryKey: ["assets", { id }],
    queryFn: () => getAsset({ id }),
  });
}
