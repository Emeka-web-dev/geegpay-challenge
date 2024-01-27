"use client";
import { Barchart } from "@/components/bar-chart";
import { BarChartDropDown } from "@/components/bar-chart-dropdown";
import { BodyItemComponent } from "@/components/body-item-component";
import { DataTable } from "@/components/data-table";
import { LinChart } from "@/components/line-chart";
import { ProgressBar } from "@/components/progress";
import { TotalComponent } from "@/components/total-component";
import { BoxTick } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-10 gap-4 p-4">
      <div className="col-span-10 lg:col-span-6 border rounded-xl h-80 bg-background">
        <BodyItemComponent
          navigation={<BarChartDropDown />}
          title="Sales trend"
        >
          <Barchart />
        </BodyItemComponent>
      </div>
      <div className="col-span-10 lg:col-span-4 grid grid-cols-4 gap-2">
        <div className="col-span-4 sm:col-span-2 bg-white rounded-lg">
          <TotalComponent
            header="Total Order"
            number="360"
            percentage={23.5}
            Icon={BoxTick}
            datakey="uv"
          />
        </div>
        <div className="col-span-4 sm:col-span-2 bg-white rounded-lg">
          <TotalComponent
            header="Total Fund"
            number="270"
            datakey="pv"
            percentage={-23.5}
            Icon={BoxTick}
          />
        </div>
        <div className="col-span-4 sm:col-span-2 bg-white rounded-lg">
          <TotalComponent
            header="Average sales"
            number="520"
            percentage={-23.5}
            Icon={BoxTick}
            datakey="uv"
          />
        </div>
        <div className="col-span-4 sm:col-span-2 bg-white rounded-lg">
          <TotalComponent
            header="Total Income"
            number="$20,000"
            percentage={23.5}
            Icon={BoxTick}
            datakey="uv"
          />
        </div>
      </div>
      <div className="col-span-10 lg:col-span-6 border p-1 rounded-xl bg-background">
        <BodyItemComponent
          title="Last Orders"
          navigation={
            <Link href={"/"} className="p-1 text-[#63cba5]">
              See All
            </Link>
          }
        >
          <DataTable />
        </BodyItemComponent>
      </div>
      <div className="col-span-10 lg:col-span-4 border p-2 bg-background rounded-xl">
        <BodyItemComponent
          title="Top Platform"
          navigation={
            <Link href={"/"} className="p-1 text-[#63cba5]">
              See All
            </Link>
          }
        >
          <div className="px-2">
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-xl">Book Bazaar</h3>
              <div className="px-2">
                <ProgressBar progressPerc={66} />
              </div>
              <div className="flex justify-between text-gray-600">
                <p>$2,000,00</p>
                <p>+15%</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold text-xl">Artisan Arsle</h3>
              <div className="px-2">
                <ProgressBar progressPerc={30} />
              </div>
              <div className="flex justify-between text-gray-600">
                <p>$2,000,00</p>
                <p>+15%</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold text-xl">Toy Trop</h3>
              <div className="px-2">
                <ProgressBar progressPerc={86} />
              </div>
              <div className="flex justify-between text-gray-600">
                <p>$2,000,00</p>
                <p>+15%</p>
              </div>
            </div>
          </div>
        </BodyItemComponent>
      </div>
    </main>
  );
}
