import DashboardHeader from "@/components/DashboardHeader";
import Widget from "@/components/widget";
import { AiFillHome } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
export default function Dashboard() {
  return (
    <div className="w-full h-full pl-8 pr-4 pt-2 pb-4">
      <DashboardHeader text="Panel" Icon={AiFillHome} />
      <div className="w-full h-auto mt-8 flex flex-wrap gap-8">
        <Widget
          text="Zamówienia"
          value={"120"}
          Icon={BsFillBoxFill}
          color="bg-gradient-to-r from-cyan-500 to-blue-500"
        />
        <Widget
          text="Zamówienia 24H"
          value={"10"}
          Icon={BsFillBoxFill}
          color="bg-gradient-to-r from-lime-400 to-green-500"
        />
        <Widget
          text="Sprzedaż"
          value={"35000.00zł"}
          Icon={FaMoneyBillAlt}
          color="bg-gradient-to-r from-rose-400 to-rose-500"
        />
        <Widget
          text="Sprzedaż 24H"
          value={"4988.00zł"}
          Icon={FaMoneyBillAlt}
          color="bg-gradient-to-r from-yellow-300 to-amber-500"
        />
      </div>
    </div>
  );
}
