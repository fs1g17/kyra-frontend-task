import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExternalLink, LinkIcon } from "lucide-react";
import Link from "next/link";

export default function SoundUsedInput({ soundUrl }: { soundUrl: string }) {
  return (
    <div className="flex flex-col gap-y-1">
      <Label htmlFor="sound">Sound Used</Label>
      <div className="flex w-full relative">
        <LinkIcon
          className="w-4 h-4 absolute left-2 top-2.5"
          onClick={() => navigator.clipboard.writeText(soundUrl)}
        />
        <Input
          id="sound"
          value={soundUrl}
          className="pl-7 bg-[#1B1A22]"
          readOnly
        />
        <Link
          className="w-4 h-4 absolute right-2 top-2.5"
          href={soundUrl}
          target="_blank"
        >
          <ExternalLink className="w-full h-full" />
        </Link>
      </div>
    </div>
  );
}
