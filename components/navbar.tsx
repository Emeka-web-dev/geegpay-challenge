"use client";
import { Bell, Menu, Search } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { CalendarForm } from "./calender";
import { Button } from "./ui/button";

import { NavbarDropDownMenu } from "./navbar-dropDownMenu";
import { useNavigation } from "@/hooks/use-navigation";

export const Navbar = () => {
  // const isMobile = useMediaQuery("(max-width: 768px)");
  const toggle = useNavigation((store) => store.toggle);
  return (
    <div className="flex justify-end items-center md:grid grid-cols-10">
      {/* left navbar */}
      <div className="col-span-6 flex-1 flex justify-between items-center pl-2">
        <div className="flex items-center space-x-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={toggle}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <Link href="/" className="font-semibold text-xl">
            Dashboard
          </Link>
        </div>

        <Button
          variant={"outline"}
          size={"none"}
          className="p-2 border rounded-full md:hidden"
        >
          <Search className="w-5 h-5 text-gray-600" />
        </Button>

        <div className="w-[250px] lg:w-[300px] py-2 rounded-full border bg-white mr-2 md:flex items-center hidden">
          <Search className="w-4 h-4 mx-3 text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="placeholder:text-gray-600 outline-none flex-1 rounded-r-full"
          />
        </div>
      </div>
      {/* right navbar */}
      <div className="col-span-4 flex justify-around items-center space-x-3 sm:space-x-4 pr-2">
        <CalendarForm />
        <Button variant={"outline"} className="rounded-full p-2">
          <Bell className="w-5 h-5" />
        </Button>
        <div>
          <NavbarDropDownMenu />
        </div>
      </div>
    </div>
  );
};
