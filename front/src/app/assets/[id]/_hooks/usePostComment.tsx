import clientFetch from "@/lib/client-side-fetching";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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
    onError: () => {
      toast.error("Failed to post comment");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["comments", { assetId }],
      });
    },
  });
}
