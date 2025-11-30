import { formatTimestamp } from "@/lib/utils";
import { Comment } from "@/types/comment";

export default function Message({ comment }: { comment: Comment }) {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="text-md font-bold">{comment.name}</div>
      <div className="bg-surface-input rounded-lg p-2">{comment.comment}</div>
      <div className="text-muted-foreground self-end">
        {formatTimestamp(comment.timestamp)}
      </div>
    </div>
  );
}
