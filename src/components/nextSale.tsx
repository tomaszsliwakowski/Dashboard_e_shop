import { AiOutlineDelete } from "react-icons/ai";
import { TbArrowsExchange2 } from "react-icons/tb";

export default function NextSale() {
  return (
    <div className="px-2 flex w-auto gap-4 shadow-lg rounded-xl duration-150 max-w-2xl pr-6 max-lg:flex-col max-lg:items-center max-lg:py-6">
      <img
        src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_10_25_51_944_02.jpg"
        alt="produkt"
        className="py-4 w-auto h-auto max-h-40 max-lg:w-fit max-lg:max-h-60"
      />
      <div className="w-full flex justify-center flex-col gap-2">
        <span className="text-2xl max-sm:text-xl text-center overflow-hidden text-ellipsis break-words max-h-8 mb-2">
          Apple iPhone 14 128GB Purple
        </span>
        <div className="text-center flex gap-1 justify-center max-sm:flex-col text-xl max-sm:text-base">
          <span className="text-gray-500">Cena promocyjna:</span>
          <span className="font-medium tracking-wide">3799.00zł</span>
        </div>
        <div className="text-center flex gap-1 justify-center max-sm:flex-col text-xl max-sm:text-base">
          <span className="text-gray-500">Cena regularna:</span>
          <span className=" font-medium tracking-wide">3999.00zł</span>
        </div>
      </div>
      <div className="flex justify-center gap-8 items-center flex-col ml-4 max-lg:flex-row">
        <button className="p-2 text-red-600 border-1 border-red-600 rounded-md hover:bg-red-600 hover:text-white duration-150">
          <AiOutlineDelete className="text-2xl max-sm:text-xl" />
        </button>
        <button className="p-2 text-blue-600 border-1 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white duration-150">
          <TbArrowsExchange2 className="text-2xl max-sm:text-xl" />
        </button>
      </div>
    </div>
  );
}
