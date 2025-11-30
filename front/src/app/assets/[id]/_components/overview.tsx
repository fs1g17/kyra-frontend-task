import { AssetDeliverable } from "@/types/asset";

export default function Overview({
  deliverable,
}: {
  deliverable: AssetDeliverable;
}) {
  return (
    <div className="p-2 flex flex-col gap-y-2.5">
      <div className="font-bold text-md">Overview</div>
      <div className="flex flex-col gap-y-1">
        <div className="text-muted-foreground">Brief Name</div>
        <div>{deliverable.brief.name}</div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-y-1">
          <div className="text-muted-foreground">Fee</div>
          <div>{deliverable.fees}</div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-muted-foreground">Deadline</div>
          <div>{deliverable.deadline}</div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="text-muted-foreground">Deliverable Title</div>
        <div>{deliverable.title}</div>
      </div>
    </div>
  );
}
