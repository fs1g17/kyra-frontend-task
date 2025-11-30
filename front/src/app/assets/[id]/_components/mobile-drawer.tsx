"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import RightScreen from "./right-screen";
import { Asset } from "@/types/asset";

export default function MobileDrawer({ asset }: { asset: Asset }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 pl-3">
          <MenuIcon />
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <RightScreen asset={asset} />
      </DrawerContent>
    </Drawer>
  );
}
