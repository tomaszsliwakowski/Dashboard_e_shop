import { IconType } from "react-icons";

type PROPS = {
  text: string;
  Icon: IconType;
};

export default function DashboardHeader(props: PROPS) {
  const { Icon, text } = props;
  return (
    <div className="flex w-full h-auto py-6 items-center gap-4 border-b-1 border-gray-300">
      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-md text-white">
        <Icon size={25} />
      </span>
      <span className=" text-xl font-bold">{text}</span>
    </div>
  );
}
