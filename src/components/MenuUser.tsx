import { AiOutlineUser } from "react-icons/ai";

export default function MenuUser() {
  return (
    <div className="mt-5 mb-8 w-full">
      <span className="text-lg flex gap-3 px-4 py-2 justify-start items-center text-white">
        <AiOutlineUser size={30} /> Admin
      </span>
    </div>
  );
}
