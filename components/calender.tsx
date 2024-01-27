"use client";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export function CalendarForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const isMobile = useMediaQuery("(max-width: 992px)");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            " pl-3 text-left font-semibold hidden md:flex space-x-2  hover:bg-white"
          )}
        >
          <CalendarDays className="h-4 w-4 mr-2" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
