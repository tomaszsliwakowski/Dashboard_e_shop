import DashboardHeader from "@/components/DashboardHeader";
import { BsBoxFill } from "react-icons/bs";

export default function Products() {
  return (
    <div className="w-full h-full pl-8 pr-4 pt-2 pb-4">
      <DashboardHeader text="Produkty" Icon={BsBoxFill} />
    </div>
  );
}
