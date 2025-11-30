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

  console.log(data);

  return (
    <div className="h-full p-4 flex flex-col gap-y-5">
      {data.map((comment) => (
        <Message comment={comment} />
      ))}
    </div>
  );
}
