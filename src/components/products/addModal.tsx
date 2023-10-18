"use client";
import { ModalType } from "@/app/dashboard/sale/page";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { InputProductContent } from "./inputAddProduct";
import axios from "axios";
import { ADD_PRODUCT } from "@/routes";
import toast from "react-hot-toast";
import { PRODUCT } from "@/types/type";

type PROPS = {
  setModal: Dispatch<SetStateAction<ModalType>>;
  setProducts: Dispatch<SetStateAction<PRODUCT[]>>;
  products: PRODUCT[];
};

export const InputLib: string[] = [
  "Producent",
  "Nazwa",
  "Zdjęcie",
  "Cena",
  "Specyfikacja",
];
export const InputNameLib: string[] = [
  "producer",
  "name",
  "img",
  "price",
  "spec",
];

export type FORM_PRODUCT_TYPE = {
  producer: string;
  name: string;
  img: string;
  price: string;
  spec: Array<string>;
};

function makeId(length: number) {
  let result: string = "";
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default function AddProductModal(props: PROPS) {
  const { setModal, products, setProducts } = props;
  const [category, setCategory] = useState("none");
  const [formValues, SetFormValues] = useState<FORM_PRODUCT_TYPE>({
    producer: "",
    name: "",
    img: "",
    price: "",
    spec: [],
  });

  const addProduct = async () => {
    if (!category) return;
    if (category === "" || category === "none") return;
    if (!formValues) return;
    if (Object.values(formValues).filter((item) => item === "").length !== 0)
      return;
    if (formValues.spec.length === 0) return;

    const productToSend: PRODUCT = {
      _id: makeId(25),
      id: products.length + 1,
      producer: formValues.producer,
      name: formValues.name,
      img: formValues.img,
      price: parseInt(formValues.price),
      opinion: Math.round(Math.random() * (5 - 3) + 3),
      spec: formValues.spec,
      category: category,
    };

    await axios
      .post(ADD_PRODUCT, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productToSend }),
      })
      .then((res) => {
        const data = res.data;
        setProducts((prev) => [...prev, data.ProductToAdd]);
        toast.success("Dodano produkt!");
      })
      .catch((res) => {
        console.log(res.message);
        toast.error("Błąd");
      });
    setModal({ id: 0, active: false, type: "" });
  };

  return (
    <div className="w-full max-w-lg rounded-2xl h-auto max-h-modalfs max-sm:max-h-full bg-white px-6 pt-4 pb-6">
      <h2 className="font-medium text-2xl w-full max-sm:text-xl flex items-center border-b-1 border-gray-300 pb-2">
        Dodaj produkt
      </h2>
      <div className="py-2">
        <form>
          <div className="flex flex-col">
            <label className="pb-1 pl-1 text-lg font-medium">Kategoria:</label>
            <select
              className="text-base font-medium cursor-pointer  border-1 border-gray-300 rounded-xl pl-2  py-2"
              name="category"
              id="category"
              value={category}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setCategory(e.target.value)
              }
            >
              <option className="text-base" value="none">
                Wybierz kategorie
              </option>
              <option className="text-base" value="Smartphone">
                Smartphone
              </option>
              <option className="text-base" value="Laptop">
                Laptopy
              </option>
              <option className="text-base" value="Komputer">
                Komputery
              </option>
              <option className="text-base" value="Komponenty">
                Komponenty
              </option>
              <option className="text-base" value="Akcesoria">
                Akcesoria
              </option>
            </select>
          </div>
          {InputLib.map((item, id) => (
            <InputProductContent
              key={id}
              item={item}
              id={id}
              SetFormValues={SetFormValues}
            />
          ))}
        </form>
        <div className="w-full flex pt-6  justify-between gap-2">
          <button
            onClick={() => addProduct()}
            className="border-1 border-green-500 px-6 py-1 text-base font-bold rounded-2xl text-green-500 duration-150 hover:text-white hover:bg-green-500"
          >
            Dodaj
          </button>
          <button
            onClick={() => setModal({ id: 0, active: false, type: "" })}
            className="border-1 border-red-500 px-6 py-1 text-base font-bold rounded-2xl text-red-500 duration-150 hover:text-white hover:bg-red-500"
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}
