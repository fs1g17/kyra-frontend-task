"use client";

import useGetComments from "../_hooks/useGetComments";
import Message from "./message";
import MessageTextBox from "./message-text-box";

export default function Messages({ assetId }: { assetId: number }) {
  const { data, isPending, isError } = useGetComments({ assetId });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>Error loading comments for asset with id: {assetId}</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="h-[calc(100vh-152px)] p-4 flex flex-col gap-y-5 overflow-y-scroll">
        {data.map((comment) => (
          <Message comment={comment} />
        ))}
      </div>
      <MessageTextBox assetId={assetId} />
    </div>
  );
}
