import DashboardHeader from "@/components/DashboardHeader";
import NextSale from "@/components/nextSale";
import Timer from "@/components/timer";
import { AiFillTags, AiOutlineDelete } from "react-icons/ai";
import { TbArrowsExchange2 } from "react-icons/tb";
import { HiOutlinePlusSm } from "react-icons/hi";

export default function Sale() {
  return (
    <div className="w-full h-full pl-8 pr-4 pt-2 pb-4 max-sm:pl-4">
      <DashboardHeader text="Promocje" Icon={AiFillTags} />
      <div className="flex pt-4 max-2xl:flex-col max-2xl:gap-12">
        <div className="py-2 max-w-md max-lg:max-w-full w-full border-r-1 border-gray-300 max-2xl:border-0 ">
          <h2 className="text-2xl font-medium">Gorący strzał</h2>
          <h3 className="text-sm text-gray-500">Aktywny</h3>
          <div className="w-full px-2 flex flex-col items-center">
            <img
              src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_10_25_51_944_02.jpg"
              alt="produkt"
              className="w-full py-4 max-lg:max-w-md"
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
              <Timer />
            </div>
            <div className="flex justify-center mt-4 gap-8">
              <button className="p-2 text-red-600 border-1 border-red-600 rounded-md hover:bg-red-600 hover:text-white duration-150">
                <AiOutlineDelete className="text-2xl max-sm:text-xl" />
              </button>
              <button className="p-2 text-blue-600 border-1 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white duration-150">
                <TbArrowsExchange2 className="text-2xl max-sm:text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 pt-2 max-lg:px-2">
          <div className="flex gap-6 ">
            <h2 className="text-2xl font-medium">Następne promocje</h2>
            <button className="p-2 text-green-600 border-1 border-green-600 rounded-md hover:bg-green-600 hover:text-white duration-150">
              <HiOutlinePlusSm className="text-2xl max-sm:text-xl" />
            </button>
          </div>
          <div className="flex flex-col mt-4 max-lg:mt-8 gap-4 w-full mb-8 max-lg:gap-8">
            <NextSale />
            <NextSale />
            <NextSale />
          </div>
        </div>
      </div>
    </div>
  );
}
