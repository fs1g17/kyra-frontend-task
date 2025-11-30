import clientFetch from "@/lib/client-side-fetching";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function postComment({
  comment,
  assetId,
}: {
  comment: string;
  assetId: number;
}): Promise<number> {
  const response = await clientFetch.post(`/api/assets/${assetId}/comments`, {
    comment,
  });
  return response.data;
}

export default function usePostComment({ assetId }: { assetId: number }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ comment }: { comment: string }) =>
      postComment({ comment, assetId }),
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["comments", { assetId }],
      });
    },
  });
}
