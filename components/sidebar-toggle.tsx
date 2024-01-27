"use client";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useNavigation } from "@/hooks/use-navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export default function SideBarToggle() {
  const { isOpen, onClose } = useNavigation();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="" side={"left"}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
