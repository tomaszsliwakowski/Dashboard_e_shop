"use client";
import { ModalType } from "@/app/dashboard/sale/page";
import { queueProduct } from "@/types/type";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TbArrowsExchange2 } from "react-icons/tb";

type PROPS = {
  product: queueProduct;
  setModal: Dispatch<SetStateAction<ModalType>>;
  deleteProduct: Function;
};

export default function NextSale(props: PROPS) {
  const { product, setModal, deleteProduct } = props;
  return (
    <div className="px-2 flex w-full gap-4 shadow-lg rounded-xl duration-150 max-w-2xl pr-6 max-lg:flex-col max-lg:items-center max-lg:py-6">
      <img
        src={product.img}
        alt={product.name}
        className="py-4 w-auto h-auto max-h-40 max-lg:w-fit max-lg:max-h-60"
      />
      <div className="w-full flex justify-center flex-col gap-2">
        <span className="text-2xl max-sm:text-xl text-center overflow-hidden text-ellipsis break-words max-h-8 mb-2">
          {product.name}
        </span>
        <div className="text-center flex gap-1 justify-center max-sm:flex-col text-xl max-sm:text-base">
          <span className="text-gray-500">Cena promocyjna:</span>
          <span className="font-medium tracking-wide">
            {product.newPrice.toFixed(2)}zł
          </span>
        </div>
        <div className="text-center flex gap-1 justify-center max-sm:flex-col text-xl max-sm:text-base">
          <span className="text-gray-500">Cena regularna:</span>
          <span className=" font-medium tracking-wide">
            {product.price.toFixed(2)}zł
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-8 items-center flex-col ml-4 max-lg:flex-row">
        <button
          onClick={() => deleteProduct(product._id)}
          className="p-2 text-red-600 border-1 border-red-600 rounded-md hover:bg-red-600 hover:text-white duration-150"
        >
          <AiOutlineDelete className="text-2xl max-sm:text-xl" />
        </button>
        <button
          onClick={() =>
            setModal({
              id: product.id,
              active: true,
              product: product,
              type: "edit",
            })
          }
          className="p-2 text-blue-600 border-1 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white duration-150"
        >
          <TbArrowsExchange2 className="text-2xl max-sm:text-xl" />
        </button>
      </div>
    </div>
  );
}
