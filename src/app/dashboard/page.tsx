import DashboardHeader from "@/components/DashboardHeader";
import Charts from "@/components/charts";
import Widget from "@/components/widget";
import dynamic from "next/dynamic";
import { AiFillHome } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

const DynamicCharts = dynamic(() => import("../../components/charts"), {
  ssr: false,
});

export default function Dashboard() {
  const data = {
    orderYear: [50, 55, 68, 72, 83, 85, 88, 97, 120],
    orderMonth: 120,
    order24H: 8,
    saleYear: [28000, 32000, 41000, 41500, 48000, 50000, 53000, 67000, 88000],
    saleMonth: 88000,
    sale24H: 4500,
  };
  return (
    <div className="w-full h-full pl-8 pr-4 pt-2 pb-4 max-md:pl-4 max-md:pr-2">
      <DashboardHeader text="Panel" Icon={AiFillHome} />
      <div className="w-full h-auto mt-8 pb-8 flex flex-wrap gap-8 border-b-1 border-gray-300 max-sm:justify-center">
        <Widget
          text="Zamówienia 30dni"
          value={data.orderMonth}
          Icon={BsFillBoxFill}
          color="bg-gradient-to-r from-cyan-500 to-blue-500"
        />
        <Widget
          text="Zamówienia 24h"
          value={data.order24H}
          Icon={BsFillBoxFill}
          color="bg-gradient-to-r from-lime-400 to-green-500"
        />
        <Widget
          text="Sprzedaż 30dni"
          value={`${data.saleMonth.toFixed(2)}zł`}
          Icon={FaMoneyBillAlt}
          color="bg-gradient-to-r from-rose-400 to-rose-500"
        />
        <Widget
          text="Sprzedaż 24h"
          value={`${data.sale24H.toFixed(2)}zł`}
          Icon={FaMoneyBillAlt}
          color="bg-gradient-to-r from-yellow-300 to-amber-500"
        />
      </div>
      <div className="flex gap-4 w-full mt-4 max-xl:flex-wrap">
        <DynamicCharts
          type="area"
          chartName="Zamówienia"
          chartData={data.orderYear}
        />
        <DynamicCharts
          type="area"
          chartName="Sprzedaż (PLN)"
          chartData={data.saleYear}
        />
      </div>
    </div>
  );
}
