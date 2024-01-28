import { data } from "@/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Barchart = () => {
  return (
    <div className="h-full mr-2 overflow-x-auto">
      <div className="w-full h-full min-w-[600px]">
        <ResponsiveContainer
          className="pr-4 text-sm"
          width="100%"
          height="100%"
        >
          <BarChart data={data} width={500} height={300} barCategoryGap={10}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              className=""
              axisLine={false}
              tickLine={false}
              tickCount={30}
            />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ background: "transparent", border: "none" }}
              cursor={{ fill: "transparent" }}
            />

            <Bar
              dataKey="uv"
              fill="#82ca9d"
              barSize={30}
              cursor="pointer"
              // onMouseMove={}
              //   activeBar={<Rectangle fill="gold" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

function CustomTooltip({ payload, label, active }: any) {
  if (active) {
    return (
      <div className="p-2 bg-gray-100 shadow-lg flex flex-col gap-4 rounded-md">
        <p className="text-[#63cba5]">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
}
