import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreatorsCaptionInput({ caption }: { caption: string }) {
  return (
    <div className="flex flex-col gap-y-1">
      <Label htmlFor="caption" className="text-muted-foreground">Creator's caption</Label>
      <Input id="caption" value={caption} className="bg-[#1B1A22] border-none" />
    </div>
  );
}
