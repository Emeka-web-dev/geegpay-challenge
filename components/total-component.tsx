"use client";

import { cn } from "@/lib/utils";
import { BoxTick } from "iconsax-react";
import { TrendingDown, TrendingUp, UserRound } from "lucide-react";
import { LinChart } from "./line-chart";

type TotolComponentProps = {
  header: string;
  number: string;
  percentage: number;
  Icon: any;
  datakey: string;
};
export const TotalComponent = ({
  header,
  number,
  percentage,
  Icon,
  datakey,
}: TotolComponentProps) => {
  return (
    <div className="p-2 flex flex-col space-y-1 justify-between">
      <div className="flex h-full">
        <div className="rounded-full border p-2">
          <Icon className="w-6 h-6" color="#63cba5" variant="Bulk" />
        </div>
        <div className="w-full flex justify-end">
          <LinChart
            datakey={datakey}
            stroke={percentage < 0 ? "#f71616" : "#63cba5"}
          />
        </div>
      </div>
      <div className="space-y-[3px]">
        <h4 className="text-gray-400 tracking-wide text-xl">{header}</h4>
        <h4 className="font-semibold text-2xl">{number}</h4>
      </div>
      <div className="flex items-center space-x-3">
        <div
          className={cn(
            "flex items-center p-1 px-2  w-fit text-sm rounded-full text-[#63cba5]",
            percentage < 0
              ? "bg-red-500/20 text-red-500"
              : "bg-[#63cba5]/20 text-[#63cba5]"
          )}
        >
          {percentage < 0 ? (
            <TrendingDown
              className={cn(
                "w-3 h-3 mr-1 ",
                percentage < 0 ? "text-red-500" : "text-[#63cba5]"
              )}
            />
          ) : (
            <TrendingUp
              className={cn(
                "w-3 h-3 mr-1 ",
                percentage < 0 ? "text-red-500" : "text-[#63cba5]"
              )}
            />
          )}

          <span>{percentage}</span>
          <span>%</span>
        </div>
        <div>
          <p className="text-sm text-gray-400">Vs. Prvious month</p>
        </div>
      </div>
    </div>
  );
};
