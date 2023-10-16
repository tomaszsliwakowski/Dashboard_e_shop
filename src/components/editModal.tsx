import { ModalType } from "@/app/dashboard/sale/page";
import { Dispatch, SetStateAction, useState } from "react";

type PROPS = {
  setModal: Dispatch<SetStateAction<ModalType>>;
  modal: ModalType;
  updateProduct: Function;
  type: string;
};

export default function EditModal(props: PROPS) {
  const { setModal, modal, updateProduct, type } = props;
  const [priceValue, setPriceValue] = useState<string>("");

  function setNewPriceValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPriceValue(value);
  }

  return (
    <div className="w-full max-w-sm rounded-2xl h-auto bg-white px-6 pt-4 pb-6">
      <h2 className=" font-medium text-2xl w-full border-b-1 border-gray-300 pb-4">
        Edytuj cenę
      </h2>
      <div className="w-full pb-8 pt-4 flex flex-col gap-4 ">
        <div className="w-full flex flex-col gap-1">
          <span className=" text-xl">
            {type === "sale" ? "Cena promocyjna:" : "Cena produktu:"}
          </span>
          <span className="text-lg tracking-widest bg-gray-200 w-fit px-2 py-1 rounded-lg">
            {type === "sale"
              ? modal.product?.newPrice?.toFixed(2)
              : modal.product?.price.toFixed(2)}
            zł
          </span>
        </div>
        <div className="w-full flex flex-col gap-1">
          <span className="text-xl">Nowa cena:</span>
          <div className="flex gap-1 items-center">
            <input
              placeholder="Podaj nową cenę"
              type="number"
              value={priceValue}
              onChange={(e) => setNewPriceValue(e)}
              min={0}
              className="text-lg tracking-widest border-1 placeholder:text-base border-gray-300 w-fit px-2 py-1 rounded-lg"
            />
            <span className="text-lg">zł</span>
          </div>
        </div>
      </div>
      <div className="pt-5  w-full flex justify-between px-6 border-t-1 border-gray-300">
        {type === "sale" ? (
          <button
            onClick={() =>
              updateProduct(modal.product?._id, parseInt(priceValue))
            }
            className="border-1 border-blue-500 px-6 py-1 text-base font-bold rounded-2xl text-blue-500 duration-150 hover:text-white hover:bg-blue-500"
          >
            Zapisz
          </button>
        ) : (
          <button
            onClick={() =>
              updateProduct(modal.product?.id.toString(), parseInt(priceValue))
            }
            className="border-1 border-blue-500 px-6 py-1 text-base font-bold rounded-2xl text-blue-500 duration-150 hover:text-white hover:bg-blue-500"
          >
            Zapisz
          </button>
        )}
        <button
          onClick={() => setModal({ id: 0, active: false, type: "" })}
          className="border-1 border-red-500 px-6 py-1 text-base font-bold rounded-2xl text-red-500 duration-150 hover:text-white hover:bg-red-500"
        >
          Anuluj
        </button>
      </div>
    </div>
  );
}
