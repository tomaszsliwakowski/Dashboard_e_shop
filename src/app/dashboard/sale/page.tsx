import DashboardHeader from "@/components/DashboardHeader";
import { AiFillTags } from "react-icons/ai";

export default function Sale() {
  return (
    <div className="w-full h-full pl-8 pr-4 pt-2 pb-4">
      <DashboardHeader text="Promocje" Icon={AiFillTags} />
    </div>
  );
}
