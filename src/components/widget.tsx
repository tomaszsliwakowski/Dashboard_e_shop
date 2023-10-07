import { IconType } from "react-icons";

type PROPS = {
  text: string;
  value: string | number;
  Icon: IconType;
  color?: string;
};

export default function Widget(props: PROPS) {
  const { text, value, Icon, color } = props;
  return (
    <div
      className={`${color} rounded-lg w-full max-w-box pt-8 pb-10 px-6 flex flex-col items-center justify-center gap-4`}
    >
      <span className="text-xl tracking-wide font-serif text-white w-full flex justify-between gap-2">
        {text}
        <Icon size={25} />
      </span>
      <span className="text-2xl font-medium tracking-wider font-sans text-white w-full ">
        {value}
      </span>
    </div>
  );
}
