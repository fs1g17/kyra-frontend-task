import clientFetch from "@/lib/client-side-fetching";
import { Asset } from "@/types/asset";
import { useQuery } from "@tanstack/react-query";

async function getAssets(): Promise<Asset[]> {
  const response = await clientFetch.get<Asset[]>("/api/assets");
  return response.data;
}

export default function useGetAssets() {
  return useQuery({
    queryKey: ["assets"],
    queryFn: getAssets,
  });
}
