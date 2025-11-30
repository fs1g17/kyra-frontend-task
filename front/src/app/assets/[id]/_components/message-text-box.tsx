"use client";

import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import usePostComment from "../_hooks/usePostComment";

export default function MessageTextBox({ assetId }: { assetId: number }) {
  const [comment, setComment] = useState<string>("");
  const { mutateAsync } = usePostComment({ assetId });

  const onSend = async () => {
    await mutateAsync({ comment });
    setComment("");
  };

  return (
    <div className="w-full border-t border-gray-600 p-2">
      <div className="relative">
        <Input
          className="w-full border-none bg-[#1B1A22]"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2"
          disabled={comment === ""}
          onClick={onSend}
        >
          <SendIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
