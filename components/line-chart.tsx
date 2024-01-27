"use client";
import { data } from "@/data";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type LinChartProps = {
  stroke: string;
  datakey: string;
};
export const LinChart = ({ stroke, datakey }: LinChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip content={<CustomTooltip stroke="#63cba5" />} />
        <Line
          type="monotone"
          dataKey={datakey}
          stroke={stroke}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

function CustomTooltip(p: any, stroke: any) {
  if (p.active) {
    return (
      <div className="p-2 bg-white border shadow-lg flex flex-col gap-4 rounded-md">
        <p>{`${p.payload[0].value}`}</p>
      </div>
    );
  }

  return null;
}
