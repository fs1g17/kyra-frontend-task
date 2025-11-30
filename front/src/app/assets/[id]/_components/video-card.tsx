export default function VideoCard({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="w-full max-w-[200px] aspect-[435/631] rounded-lg overflow-hidden">
      <video src={videoUrl} controls className="w-full h-full object-cover" />
    </div>
  );
}
