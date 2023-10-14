"use client";
import { ModalType } from "@/app/dashboard/sale/page";
import { ADD_SALE, GET_PRODUCTS } from "@/routes";
import { queueProduct } from "@/types/type";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

type PROPS = {
  setModal: Dispatch<SetStateAction<ModalType>>;
  activeSale: queueProduct | undefined;
  queue: queueProduct[];
  setActiveSale: Dispatch<SetStateAction<queueProduct | undefined>>;
  setQueue: Dispatch<SetStateAction<queueProduct[]>>;
};

const categoryLib: string[] = [
  "Wszystko",
  "Laptopy",
  "Smartphone",
  "Komputery",
  "Komponenty",
  "Akcesoria",
];

export default function AddModal(props: PROPS) {
  const { setModal, activeSale, setQueue, setActiveSale, queue } = props;
  const [products, setProducts] = useState<queueProduct[]>([]);
  const [category, setCategory] = useState("Wszystko");

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

  const addProductToSale = async (item: queueProduct) => {
    if (queue.length >= 6) {
      toast.error("Pełna kolejka");
      setModal({ id: 0, active: false, type: "" });
      return;
    }
    if (!item) return;
    item.newPrice = item.price;
    await axios
      .post(ADD_SALE, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item }),
      })
      .then((res) => {
        const data = res.data;
        if (!data.product) return;
        if (!activeSale) {
          setActiveSale(data.product);
        } else {
          setQueue((prev) => [...prev, data.product]);
        }
        setModal({ id: 0, active: false, type: "" });
        toast.success("Dodano produkt!");
      })
      .catch((res) => console.log(res.message));
    setModal({ id: 0, active: false, type: "" });
  };

  return (
    <div className="w-full max-w-6xl rounded-2xl h-auto max-h-modalfs max-sm:max-h-full bg-white px-6 pt-4 pb-6">
      <div className="flex justify-between  pb-2">
        <h2 className=" font-medium text-2xl w-full max-sm:text-xl flex items-center">
          Dodaj produkt
        </h2>
        <button
          onClick={() => setModal({ id: 0, active: false, type: "" })}
          className=" max-sm:px-4 border-1 border-red-500 px-6 py-1 text-base font-bold rounded-2xl text-red-500 duration-150 hover:text-white hover:bg-red-500"
        >
          Anuluj
        </button>
      </div>
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
      <div className="w-full max-w-6xl max-h-md max-sm:max-h-auto pb-8 pt-4  flex flex-col gap-4 border-b-1 border-gray-300   overflow-auto ">
        <ul className="pr-2 w-full flex flex-wrap gap-4 max-sm:justify-center ">
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
                  <button
                    onClick={() => addProductToSale(item)}
                    className="mt-4 border-1 border-green-500 px-6 py-1 text-sm font-bold rounded-2xl text-green-500 duration-150 hover:text-white hover:bg-green-500"
                  >
                    Dodaj
                  </button>
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
  );
}
