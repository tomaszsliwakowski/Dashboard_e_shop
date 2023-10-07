"use client";
import { usePathname, useRouter } from "next/navigation";
import Header from "./header";
import Link from "next/link";
import { PANEL_ROUTE, PRODUCTS_ROUTE, SALE_ROUTE } from "@/routes";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import MenuUser from "./MenuUser";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const { push } = useRouter();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const logOut = async () => {
    await signOut(auth);
    push("/");
  };
  useEffect(() => {
    if (openMenu) {
      setOpenMenu(false);
    }
  }, [pathname]);

  return (
    <div
      className={`${
        openMenu ? "max-md:max-w-full" : " max-md:max-w-mobile"
      } w-full max-w-xs bg-gray-700 fixed h-screen `}
    >
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MenuUser openMenu={openMenu} />
      <ul
        className={`${
          openMenu
            ? "w-full flex flex-col gap-4 "
            : "w-full flex flex-col gap-4 max-md:hidden"
        }`}
      >
        <Link
          href={PANEL_ROUTE}
          className={`${
            pathname === PANEL_ROUTE
              ? "bg-slate-600 border-l-8 border-l-gray-400 px-2 py-2 text-lg font-bold text-white"
              : "px-2 py-2 text-lg font-bold text-white hover:bg-slate-600"
          } duration-150 flex justify-between items-center `}
        >
          Panel
          {pathname !== PANEL_ROUTE ? (
            <MdKeyboardDoubleArrowRight size={25} />
          ) : null}
        </Link>
        <Link
          href={SALE_ROUTE}
          className={`${
            pathname === SALE_ROUTE
              ? "bg-slate-600 border-l-8 border-l-gray-400 px-2 py-2 text-lg font-bold text-white"
              : "px-2 py-2 text-lg font-bold text-white hover:bg-slate-600"
          } duration-150 flex justify-between items-center `}
        >
          Promocje
          {pathname !== SALE_ROUTE ? (
            <MdKeyboardDoubleArrowRight size={25} />
          ) : null}
        </Link>
        <Link
          href={PRODUCTS_ROUTE}
          className={`${
            pathname === PRODUCTS_ROUTE
              ? "bg-slate-600 border-l-8 border-l-gray-400 px-2 py-2 text-lg font-bold text-white"
              : "px-2 py-2 text-lg font-bold text-white hover:bg-slate-600"
          } duration-150 flex justify-between items-center `}
        >
          Produkty
          {pathname !== PRODUCTS_ROUTE ? (
            <MdKeyboardDoubleArrowRight size={25} />
          ) : null}
        </Link>
      </ul>
      {!openMenu ? (
        <div className="w-full px-2 justify-center mt-2 hidden max-md:flex">
          <AiOutlineMenu
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      ) : null}
      <div className="absolute bottom-6 left-6 max-md:left-2.5 border-1 py-1 px-4 rounded-lg duration-150 text-white font-bold hover:bg-white hover:text-slate-600">
        <button
          onClick={logOut}
          className="flex justify-center items-center gap-2"
        >
          <span className={`${openMenu ? "" : "max-md:hidden"}`}>
            Wyloguj się
          </span>{" "}
          <RxExit />
        </button>
      </div>
    </div>
  );
}
