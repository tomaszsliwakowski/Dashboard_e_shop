import { Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type PROPS = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export default function Header(props: PROPS) {
  const { openMenu, setOpenMenu } = props;

  return (
    <div
      className={`${
        openMenu ? "w-full py-4 px-4 mt-2" : "w-full py-4 px-4 mt-2 max-md:px-2"
      }`}
    >
      <h1 className=" text-white font-bold text-2xl flex justify-between items-center">
        <span className={`${!openMenu ? "text-xl" : ""}`}>Shop Panel</span>
        {openMenu ? (
          <div className="w-fit px-2 justify-center mt-2 hidden max-md:flex">
            <AiFillCloseCircle
              size={35}
              className="text-white cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          </div>
        ) : null}
      </h1>
    </div>
  );
}
