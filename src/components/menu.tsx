"use client";
import { usePathname } from "next/navigation";
import Header from "./header";
import Link from "next/link";
import { PANEL_ROUTE, PRODUCTS_ROUTE, SALE_ROUTE } from "@/routes";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import MenuUser from "./MenuUser";

export default function Menu() {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-xs min-h-screen bg-gray-700 max-md:hidden">
      <Header />
      <MenuUser />
      <ul className="w-full flex flex-col gap-4">
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
          Promocja{" "}
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
          Produkty{" "}
          {pathname !== PRODUCTS_ROUTE ? (
            <MdKeyboardDoubleArrowRight size={25} />
          ) : null}
        </Link>
      </ul>
      <div className="absolute bottom-6 left-6 border-1 py-1 px-4 rounded-lg duration-150 text-white font-bold hover:bg-white hover:text-slate-600">
        <button>Wyloguj się</button>
      </div>
    </div>
  );
}
