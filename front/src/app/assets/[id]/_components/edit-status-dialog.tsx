import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Asset, ASSET_STATUSES, AssetStatus } from "@/types/asset";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function EditStatusDialog({ asset }: { asset: Asset }) {
  const [status, setStatus] = useState<AssetStatus>(asset.status);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-violet-800 to-pink-400">
          Edit Status
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Status</DialogTitle>
          <DialogDescription>
            Edit the status of the asset with id {asset.id}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{status}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuRadioGroup
                value={status}
                onValueChange={(e) => setStatus(e as AssetStatus)}
              >
                {Object.entries(ASSET_STATUSES).map(([a, b]) => (
                  <DropdownMenuRadioItem key={a} value={b}>
                    {b}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" disabled={status === asset.status}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
