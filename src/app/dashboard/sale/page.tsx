"use client";
import DashboardHeader from "@/components/DashboardHeader";
import NextSale from "@/components/nextSale";
import Timer from "@/components/timer";
import { AiFillTags, AiOutlineDelete } from "react-icons/ai";
import { TbArrowsExchange2 } from "react-icons/tb";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import { DELETE_SALE, GET_SALE } from "@/routes";
import { queueProduct } from "@/types/type";
import { ThreeDots } from "react-loader-spinner";
import EditModal from "@/components/editModal";

export type ModalType = {
  id: number;
  active: boolean;
  product?: queueProduct;
  type: string;
};

export default function Sale() {
  const [loading, setLoading] = useState<boolean>(true);
  const [queue, setQueue] = useState<queueProduct[]>([]);
  const [activeSale, setActiveSale] = useState<queueProduct | undefined>(
    undefined
  );
  const [modal, setModal] = useState<ModalType>({
    id: 0,
    active: false,
    type: "",
  });

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(GET_SALE)
        .then((res) => {
          const data = res.data;
          setQueue(data.Products.splice(1));
          setActiveSale(data.Products[0]);
          setLoading(false);
        })
        .catch((res) => console.log(res.message));
    };
    fetchData();
  }, []);

  const closeModal = (e: React.MouseEvent) => {
    let target = e.target as HTMLElement;
    if (target.id === "modal") {
      setModal({ id: 0, active: false, type: "" });
    }
  };
  const deleteProductFromQueue = async (_id: string) => {
    if (window.confirm("Czy chcesz usunąć produkt?")) {
      await axios.delete(DELETE_SALE(_id)).then((res) => {
        const product: queueProduct = res.data.deleteRes;
        if (queue.findIndex((it) => it._id === product._id) >= 0) {
          setQueue((prev) => prev.filter((item) => item._id !== product._id));
        } else if (activeSale?._id === product._id) {
          setActiveSale(queue[0]);
        }
      });
    }
  };

  return (
    <>
      <div className="w-full h-full pl-8 pr-4 pt-2 pb-4 max-sm:pl-4">
        <DashboardHeader text="Promocje" Icon={AiFillTags} />
        {!loading ? (
          <div className="flex pt-4 max-2xl:flex-col max-2xl:gap-12">
            <div className="py-2 max-w-md max-lg:max-w-full w-full border-r-1 border-gray-300 max-2xl:border-0 ">
              <h2 className="text-2xl font-medium">Gorący strzał</h2>
              <h3 className="text-sm text-gray-500">Aktywny</h3>
              <div className="w-full px-2 flex flex-col items-center">
                <img
                  src={activeSale?.img}
                  alt={activeSale?.name}
                  className="w-full py-4 max-lg:max-w-md"
                />
                <div className="w-full flex justify-center flex-col gap-2">
                  <span className="text-2xl max-sm:text-xl text-center overflow-hidden text-ellipsis break-words max-h-8 mb-2">
                    {activeSale?.name}
                  </span>
                  <div className="text-center flex gap-1 justify-center max-sm:flex-col text-xl max-sm:text-base">
                    <span className="text-gray-500">Cena promocyjna:</span>
                    <span className="font-medium tracking-wide">
                      {activeSale?.newPrice.toFixed(2)}zł
                    </span>
                  </div>
                  <div className="text-center flex gap-1 justify-center max-sm:flex-col text-xl max-sm:text-base">
                    <span className="text-gray-500">Cena regularna:</span>
                    <span className=" font-medium tracking-wide">
                      {activeSale?.price.toFixed(2)}zł
                    </span>
                  </div>
                  <Timer />
                </div>
                <div className="flex justify-center mt-4 gap-8">
                  <button className="p-2 text-red-600 border-1 border-red-600 rounded-md hover:bg-red-600 hover:text-white duration-150">
                    <AiOutlineDelete
                      onClick={() =>
                        deleteProductFromQueue(activeSale?._id || "")
                      }
                      className="text-2xl max-sm:text-xl"
                    />
                  </button>
                  <button className="p-2 text-blue-600 border-1 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white duration-150">
                    <TbArrowsExchange2
                      onClick={() =>
                        setModal({
                          id: activeSale?.id || 0,
                          active: true,
                          product: activeSale,
                          type: "edit",
                        })
                      }
                      className="text-2xl max-sm:text-xl"
                    />
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
                {queue.map((item, id) => (
                  <NextSale
                    key={id}
                    product={item}
                    setModal={setModal}
                    deleteProduct={deleteProductFromQueue}
                  />
                ))}
              </div>
            </div>
          </div>
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
      </div>
      {modal.active ? (
        <div
          id="modal"
          onClick={(e) => closeModal(e)}
          className="z-full h-screen w-full fixed top-0 left-0 bg-black/70 flex justify-center items-center overflow-hidden"
        >
          {modal.type === "edit" ? (
            <EditModal setModal={setModal} modal={modal} />
          ) : null}
        </div>
      ) : null}
    </>
  );
}
