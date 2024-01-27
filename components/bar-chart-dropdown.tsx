"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export const BarChartDropDown = () => {
  return (
    <div className="flex space-x-2 items-center">
      <h4 className="font-semibold text-sm">Sort by:</h4>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button asChild variant={"ghost"} size={"none"}>
            <span className="flex space-x-2">
              <p>navigation</p>
              <ChevronDown className="w-4 h-4" />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuItem>Weekly</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Monthly</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
