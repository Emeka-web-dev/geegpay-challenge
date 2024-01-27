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

export const NavbarDropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          asChild
          variant={"outline"}
          size={"none"}
          className="rounded-full"
        >
          <span className="flex space-x-2">
            <div className="relative w-8 h-8">
              <Image
                src={"/image.JPG"}
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="xl:flex flex-col justify-end hidden">
              <span>Chukwu Emeka</span>
              <span className="line-clamp-1 text-xs text-gray-600">
                justin@gmail.com
              </span>
            </div>
            <div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="md:hidden">
          {/* Calender */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-between items-center">
                <span>Calender</span>
                <ChevronDown className="ml-2 w-4 h-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2">
              <DropdownMenuItem>
                <Calendar
                  mode="single"
                  //   selected={date}
                  //   onSelect={setDate}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
