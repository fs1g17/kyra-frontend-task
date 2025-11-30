import clientFetch from "@/lib/client-side-fetching";
import { Comment } from "@/types/comment";
import { useQuery } from "@tanstack/react-query";

async function getComments({
  assetId,
}: {
  assetId: number;
}): Promise<Comment[]> {
  const response = await clientFetch.get<Comment[]>(
    `/api/assets/${assetId}/comments`
  );
  return response.data;
}

export default function useGetComments({ assetId }: { assetId: number }) {
  return useQuery({
    queryKey: ["comments", { assetId }],
    queryFn: () => getComments({ assetId }),
  });
}
