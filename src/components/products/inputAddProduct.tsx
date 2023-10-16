import { Dispatch, SetStateAction } from "react";
import { FORM_PRODUCT_TYPE, InputNameLib } from "./addModal";

type InputPROPS = {
  item: string;
  SetFormValues: Dispatch<SetStateAction<FORM_PRODUCT_TYPE>>;
  id: number;
};

export function InputProductContent(props: InputPROPS) {
  const { item, SetFormValues, id } = props;

  return (
    <div className="pt-3 flex flex-col">
      <span className="pb-1 pl-1 text-lg font-medium">{item}:</span>
      {InputNameLib[id] === "spec" ? (
        <textarea
          onChange={(e) =>
            SetFormValues((prev) => ({
              ...prev,
              [e.target.name]: e.target.value.split("/"),
            }))
          }
          name={InputNameLib[id]}
          placeholder={`${item} -- Dane oddzielaj ' / '.`}
          className=" max-h-32 text-base font-normal cursor-pointer  border-1 border-gray-300 rounded-xl px-2  py-2"
        />
      ) : (
        <input
          type={InputNameLib[id] === "price" ? "number" : "text"}
          name={InputNameLib[id]}
          placeholder={item}
          onChange={(e) =>
            SetFormValues((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          className="text-base font-normal cursor-pointer  border-1 border-gray-300 rounded-xl px-2  py-2"
        />
      )}
    </div>
  );
}
