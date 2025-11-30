import clientFetch from "@/lib/client-side-fetching";
import { AssetStatus } from "@/types/asset";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
      console.log("SUCCESS");
    },
    onError: (e) => {
      console.error(e);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["assets"] });
    },
  });
}
