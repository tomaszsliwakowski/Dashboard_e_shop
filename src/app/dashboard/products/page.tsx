"use client";
import DashboardHeader from "@/components/DashboardHeader";
import { GET_PRODUCTS } from "@/routes";
import { queueProduct } from "@/types/type";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsBoxFill } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import { HiOutlinePlusSm } from "react-icons/hi";
import { categoryLib } from "@/components/sale/addModal";
import { ModalType } from "../sale/page";
import EditModal from "@/components/editModal";

export default function Products() {
  const [products, setProducts] = useState<queueProduct[]>([]);
  const [category, setCategory] = useState("Wszystko");
  const [modal, setModal] = useState<ModalType>({
    id: 0,
    active: false,
    type: "",
  });

  useEffect(() => {
    axios
      .get(GET_PRODUCTS(category))
      .then((res) => {
        const data = res.data;
        setProducts(data.Products);
      })
      .catch((res) => {
        console.log(res.message);
        toast.error("Błąd");
      });
  }, [category]);

  const closeModal = (e: React.MouseEvent) => {
    let target = e.target as HTMLElement;
    if (target.id === "modal") {
      setModal({ id: 0, active: false, type: "" });
    }
  };

  useEffect(() => {
    const parent = document.querySelector("body");
    if (parent && modal.active) {
      parent.style.overflow = "hidden";
    }
    return () => {
      if (parent) {
        parent.style.overflow = "auto";
      }
    };
  }, [modal]);

  return (
    <>
      <div className="w-full h-full pl-8 pr-4 pt-2 pb-4">
        <DashboardHeader text="Produkty" Icon={BsBoxFill} />
        <div className="py-4 flex max-sm:justify-center flex-wrap gap-4 border-b-1 border-gray-300 ">
          {categoryLib.map((item, id) => (
            <span
              key={id}
              onClick={() => setCategory(item)}
              className={`${
                item === category
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              } text-center min-w-sm cursor-pointer text-base py-1 px-4 border-1 border-blue-500 text-blue-500 font-bold duration-150 rounded-2xl`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="w-full pb-8 pt-4  flex flex-col gap-4 overflow-auto ">
          <ul className="pr-2 w-full flex flex-wrap gap-4 max-sm:justify-center ">
            {products.length > 0 ? (
              <div
                onClick={() => setModal({ id: 0, active: true, type: "add" })}
                className=" cursor-pointer flex justify-center items-center text-white w-full max-w-xs max-sm:max-w-sm p-4  bg-green-500  rounded-lg"
              >
                <HiOutlinePlusSm className="text-6xl font-bold" />
              </div>
            ) : null}
            {products.length > 0 ? (
              products.map((item, id) => (
                <div
                  key={id}
                  className="flex flex-col max-w-xs max-sm:max-w-sm p-4 shadow-md rounded-lg justify-between"
                >
                  <img src={item.img} alt={item.name} />
                  <div className="flex flex-col">
                    <span className="text-sm text-center overflow-hidden text-ellipsis break-words max-h-11 mb-2">
                      {item.name}
                    </span>
                    <div className="text-center flex gap-1 justify-center max-sm:flex-col text-base max-sm:text-base">
                      <span className="text-gray-500">Cena:</span>
                      <span className="font-medium tracking-wide">
                        {item.price.toFixed(2)}zł
                      </span>
                    </div>
                    <div className="w-full flex justify-between">
                      <button
                        onClick={() =>
                          setModal({
                            id: item.id,
                            active: true,
                            type: "edit",
                            product: item,
                          })
                        }
                        className="mt-4 border-1 border-blue-500 px-6 py-1 text-sm font-bold rounded-2xl text-blue-500 duration-150 hover:text-white hover:bg-blue-500"
                      >
                        Edytuj
                      </button>
                      <button className="mt-4 border-1 border-red-500 px-6 py-1 text-sm font-bold rounded-2xl text-red-500 duration-150 hover:text-white hover:bg-red-500">
                        Usuń
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-fs w-full flex justify-center items-center">
                <ThreeDots
                  height="120"
                  width="120"
                  radius="9"
                  color="#4895ef"
                  ariaLabel="three-dots-loading"
                  wrapperClass=""
                  visible={true}
                />
              </div>
            )}
          </ul>
        </div>
      </div>
      {modal.active ? (
        <div
          id="modal"
          onClick={(e) => closeModal(e)}
          className="z-full h-screen w-full fixed top-0 left-0 bg-black/70 flex justify-center items-center overflow-hidden"
        >
          {modal.type === "edit" ? (
            <EditModal
              type="product"
              modal={modal}
              setModal={setModal}
              updateProduct={() => {}}
            />
          ) : null}
          {modal.type === "add" ? <div></div> : null}
        </div>
      ) : null}
    </>
  );
}
