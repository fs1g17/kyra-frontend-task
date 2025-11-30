export default function ThumbnailCard({
  thumbnailUrl,
}: {
  thumbnailUrl: string;
}) {
  return (
    <div className="w-full max-w-[200px]">
      <div
        className="aspect-[435/631] bg-cover bg-center rounded-lg p-2 flex flex-col justify-between"
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      />
      <div className="text-center">Thumbnail</div>
    </div>
  );
}
