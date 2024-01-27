"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { table } from "console";
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
];

export function DataTable() {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[600px]">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
              <TableCell>{invoice.status}</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </div>

    // <div className=" overflow-x-auto">
    //   <table className="border w-full min-w-[600px]">
    //     <tr className="text-left">
    //       <th>Company</th>
    //       <th>Contact</th>
    //       <th>Contact</th>
    //       <th>Contact</th>
    //       <th>Country</th>
    //     </tr>
    //     <tr className="">
    //       <td>Alfreds Futterkiste</td>
    //       <td>Alfreds Futterkiste</td>
    //       <td>Alfreds Futterkiste</td>
    //       <td>Maria Anders</td>
    //       <td>Germany</td>
    //     </tr>
    //     <tr>
    //       <td>Centro comercial Moctezuma</td>
    //       <td>Francisco Chang</td>
    //       <td>Mexico</td>
    //     </tr>
    //   </table>
    // </div>
  );
}
