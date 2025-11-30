import clientFetch from "@/lib/client-side-fetching";
import { AssetStatus } from "@/types/asset";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

async function patchAsset({ id, status }: { id: number; status: AssetStatus }) {
  const response = await clientFetch.patch(`/api/assets/${id}`, { status });
  return response.data;
}

export default function usePatchAsset({ id }: { id: number }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ status }: { status: AssetStatus }) =>
      patchAsset({ id, status }),
    onSuccess: () => {
      toast.success("Status updated successfully");
    },
    onError: () => {
      toast.error("Failed to update status");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["assets"] });
    },
  });
}
