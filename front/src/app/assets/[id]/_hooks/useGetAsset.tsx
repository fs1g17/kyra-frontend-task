import clientFetch from "@/lib/client-side-fetching";
import { Asset } from "@/types/asset";
import { useQuery } from "@tanstack/react-query";

async function getAsset({ id }: { id: string }): Promise<Asset> {
  const response = await clientFetch.get<Asset>(`/api/assets/${id}`);
  return response.data;
}

export default function useGetAsset({ id }: { id: string }) {
  return useQuery({
    queryKey: ["assets", { id }],
    queryFn: () => getAsset({ id }),
  });
}
