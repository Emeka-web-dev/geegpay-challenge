"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DocumentDownload } from "iconsax-react";
import Image from "next/image";

const invoices = [
  {
    profile: {
      name: "Marcus Bergson",
      image: "/image.JPG",
    },
    date: "Nov 23, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    profile: {
      name: "Jaydon Vaccaro",
      image: "/image.JPG",
    },
    date: "Nov 23, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    profile: {
      name: "Corey Schleifer",
      image: "/image.JPG",
    },
    date: "Nov 23, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    profile: {
      name: "Philip Luban",
      image: "/image.JPG",
    },
    date: "Nov 23, 2023",
    amount: "$80,000",
    status: "Refund",
  },
  {
    profile: {
      name: "Cooper Press",
      image: "/image.JPG",
    },
    date: "Nov 23, 2023",
    amount: "$100,000",
    status: "Paid",
  },
];

export function DataTable() {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[600px]">
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-gray-600 text-lg">
              Name
            </TableHead>
            <TableHead className="font-bold text-gray-600 text-lg">
              Date
            </TableHead>
            <TableHead className="font-bold text-gray-600 text-lg">
              Amount
            </TableHead>
            <TableHead className="font-bold text-gray-600 text-lg">
              Status
            </TableHead>
            <TableHead className="font-bold text-gray-600 text-lg">
              Invoice
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <Image
                    src={invoice.profile.image}
                    fill
                    alt=""
                    className="object-cover rounded-full"
                  />
                </div>
                <p>{invoice.profile.name}</p>
              </TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell
                className={
                  invoice.status === "Paid"
                    ? "text-[#63cba5]"
                    : "text-[#cc5223]"
                }
              >
                {invoice.status}
              </TableCell>
              <TableCell className="flex items-center">
                <DocumentDownload className="w-4 h-4 mr-2" />
                <p>View</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
