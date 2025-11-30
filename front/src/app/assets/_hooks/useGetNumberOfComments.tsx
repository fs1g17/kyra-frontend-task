import clientFetch from "@/lib/client-side-fetching";
import { Comment } from "@/types/comment";
import { useQuery } from "@tanstack/react-query";

async function getNumberOfComments({
  assetId,
}: {
  assetId: number;
}): Promise<number> {
  const response = await clientFetch.get<Comment[]>(
    `/api/assets/${assetId}/comments`
  );

  return response.data.length;
}

export default function useGetNumberOfComments({
  assetId,
}: {
  assetId: number;
}) {
  return useQuery({
    queryKey: ["comments", { assetId, number: true }],
    queryFn: () => getNumberOfComments({ assetId }),
  });
}
