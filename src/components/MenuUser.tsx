import { AiOutlineUser } from "react-icons/ai";

type PROPS = {
  openMenu: boolean;
};

export default function MenuUser(props: PROPS) {
  const { openMenu } = props;
  return (
    <div
      className={`${
        openMenu ? "mt-5 mb-8 w-full" : "mt-5 mb-8 w-full max-md:hidden"
      }`}
    >
      <span className="text-lg flex gap-3 px-4 py-2 justify-start items-center text-white ">
        <AiOutlineUser size={30} /> Admin
      </span>
    </div>
  );
}
