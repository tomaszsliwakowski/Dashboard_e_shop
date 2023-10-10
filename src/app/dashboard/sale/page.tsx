import DashboardHeader from "@/components/DashboardHeader";
import { AiFillTags, AiOutlineDelete } from "react-icons/ai";
import { TbArrowsExchange2 } from "react-icons/tb";

export default function Sale() {
  return (
    <div className="w-full h-full pl-8 pr-4 pt-2 pb-4">
      <DashboardHeader text="Promocje" Icon={AiFillTags} />
      <div className="flex pt-8">
        <div className="py-2 max-w-md w-full border-r-1 border-gray-300">
          <h2 className="text-2xl font-medium">Gorący strzał</h2>
          <h3 className="text-sm text-gray-500">Aktywny</h3>
          <div className="w-full px-2">
            <img
              src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_10_25_51_944_02.jpg"
              alt="produkt"
              className="w-full py-4"
            />
            <div className="w-full flex justify-center flex-col gap-2">
              <span className="text-2xl text-center overflow-hidden text-ellipsis break-words max-h-8 mb-2">
                Apple iPhone 14 128GB Purple
              </span>
              <div className="text-center flex gap-1 justify-center text-xl">
                <span className="text-gray-500">Cena promocyjna:</span>
                <span className="font-medium tracking-wide">3799.00zł</span>
              </div>
              <div className="text-center flex gap-1 justify-center text-xl">
                <span className="text-gray-500">Cena regularna:</span>
                <span className=" font-medium tracking-wide">3999.00zł</span>
              </div>
              <div className="mt-2 flex flex-col items-center">
                <span className="text-xl">Koniec promocji za:</span>
                <span className="text-2xl my-2">17:12:12</span>
              </div>
            </div>
            <div className="flex justify-center mt-2 gap-8">
              <button className="p-2 text-red-600">
                <AiOutlineDelete size={25} />
              </button>
              <button className="p-2 text-blue-600">
                <TbArrowsExchange2 size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
