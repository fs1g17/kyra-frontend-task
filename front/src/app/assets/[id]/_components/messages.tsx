"use client";

import { useEffect, useRef } from "react";
import useGetComments from "../_hooks/useGetComments";
import Message from "./message";
import MessageTextBox from "./message-text-box";
import { Skeleton } from "@/components/ui/skeleton";

export default function Messages({ assetId }: { assetId: number }) {
  const { data, isPending, isError } = useGetComments({ assetId });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  if (isPending) {
    return (
      <div className="flex flex-col h-full p-4 gap-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-3 w-20 self-end" />
          </div>
        ))}
      </div>
    );
  }

  if (!data || isError) {
    return <div>Error loading comments for asset with id: {assetId}</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="h-[calc(100vh-152px)] p-4 flex flex-col gap-y-5 overflow-y-scroll">
        {data.map((comment) => (
          <Message key={comment.id} comment={comment} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageTextBox assetId={assetId} />
    </div>
  );
}
