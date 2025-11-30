export default defineEventHandler(async (event) => {
  const store = useStorage("memory");
  const assets = await store.getItem<any[]>("assets");
  const comments = await store.getItem<any[]>("comments");

  if (!assets) {
    return [];
  }

  return assets.map((asset) => ({
    ...asset,
    commentCount: comments?.filter((comment) => comment.assetId === asset.id).length ?? 0,
  }));
});
