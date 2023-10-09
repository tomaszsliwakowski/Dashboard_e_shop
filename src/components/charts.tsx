"use client";
import Chart, { Props } from "react-apexcharts";
import { useState } from "react";
import { chartType } from "@/types/type";
import useWindowSize from "@/hooks/useWindowSize";

type PROPS = {
  chartData: Array<number>;
  chartName: string;
  type: chartType;
};

export default function Charts(props: PROPS) {
  const { chartData, chartName, type } = props;
  const [state, setState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: lastYear(),
      },
    },
    series: [
      {
        name: chartName,
        data: chartData,
      },
    ],
  });
  const { width } = useWindowSize();

  function lastYear(): string[] {
    let date: Date = new Date();
    let lastMonths: string[] = [],
      monthNames: string[] = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    for (let i = 0; i < 12; i++) {
      lastMonths.push(monthNames[date.getMonth()]);
      date.setMonth(date.getMonth() - 1);
    }
    return lastMonths.splice(0, 9).reverse();
  }

  return (
    <div className="max-md:pr-2 w-full max-w-2xl">
      <h2 className="pl-4 font-bold text-2xl mb-2 ">{chartName}</h2>
      <Chart
        options={state.options}
        series={state.series}
        type={type}
        width={"100%"}
        height={500}
      />
    </div>
  );
}
