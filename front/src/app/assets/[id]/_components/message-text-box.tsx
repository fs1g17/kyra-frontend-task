"use client";

import { Input } from "@/components/ui/input";
import { SendIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
import usePostComment from "../_hooks/usePostComment";

export default function MessageTextBox({ assetId }: { assetId: number }) {
  const [comment, setComment] = useState<string>("");
  const { mutateAsync, isPending } = usePostComment({ assetId });

  const onSend = async () => {
    if (!comment.trim() || isPending) return;
    await mutateAsync({ comment });
    setComment("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="w-full border-t border-gray-600 p-2">
      <div className="relative">
        <Input
          className="w-full border-none bg-surface-input"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          disabled={isPending}
          placeholder="Type a message..."
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 disabled:opacity-50"
          disabled={!comment.trim() || isPending}
          onClick={onSend}
        >
          {isPending ? (
            <Loader2Icon className="w-4 h-4 animate-spin" />
          ) : (
            <SendIcon className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
