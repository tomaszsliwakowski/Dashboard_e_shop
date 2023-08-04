"use client";
import { TimerType, queueProduct } from "@/types/type";
import styles from "../../PageStyle.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

type props = {
  Timer: TimerType | undefined;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

type edit = {
  id: string;
  ePrice: string;
  active: boolean;
};

export default function SaleWidget({ Timer, setActive }: props) {
  const [Products, setProducts] = useState<queueProduct[] | undefined>(
    undefined
  );
  const [ActiveSale, setActiveSale] = useState<queueProduct | undefined>(
    undefined
  );
  const [EditSale, setEditSale] = useState<edit>({
    id: "0",
    ePrice: "0",
    active: false,
  });
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("hhttps://dashboard-e-shop.vercel.app/api/product/queue")
      .then((resault) => {
        const data: queueProduct[] = resault.data["Product"];
        setActiveSale(resault.data["Product"][0]);
        setProducts(
          data.slice(1).sort(function (a, b) {
            return a.queue - b.queue;
          })
        );
      })
      .catch(() => console.log("Error"));
  }, [refresh]);
  const editSaleProduct = () => {
    if (EditSale.ePrice === "") return;
    axios
      .put(
        "https://dashboard-e-shop.vercel.app/api/product/queue",
        JSON.stringify({
          id: EditSale.id,
          price: EditSale.ePrice,
        })
      )
      .then(() => {
        setRefresh((prev) => !prev);
      });
    setEditSale({ id: "0", ePrice: "0", active: false });
  };

  const removeSaleProduct = (id: string) => {
    if (!id && id === "") return;
    axios
      .delete(`https://dashboard-e-shop.vercel.app/api/product/queue/${id}`)
      .then(() => setRefresh((prev) => !prev));
  };

  useEffect(() => {
    if (!Timer) return;
    if (Timer.hour === 0 && Timer.minutes === 0 && Timer.second === 0) {
      axios.delete(
        `https://dashboard-e-shop.vercel.app/api/product/queue/${ActiveSale?._id}`
      );
    }
  }, [Timer]);

  return (
    <div className={styles.saleContainer}>
      <div className={styles.activeSale}>
        <span className={styles.saleATitle}>Aktualny produkt</span>
        <div className={styles.saleProduct}>
          {ActiveSale ? (
            <>
              <img src={ActiveSale.img} alt={ActiveSale.category} />
              <span className={styles.saleProduct__name}>
                {ActiveSale.name}
              </span>
              <div className={styles.saleProduct__price}>
                <div>
                  <span>Cena promocyjna:</span>
                  <span>{ActiveSale.newPrice.toFixed(2)}zł</span>
                </div>
                <div>
                  <span>Cena regularna:</span>
                  <span>{ActiveSale.price.toFixed(2)}zł</span>
                </div>
              </div>
              <div className={styles.saleProduct__time}>
                <div className={styles.time__reasult}>
                  <span>
                    {Timer !== undefined
                      ? Timer.hour > 9
                        ? Timer?.hour
                        : `0${Timer?.hour}`
                      : `00`}
                  </span>
                  <span>godz.</span>
                </div>
                <div className={styles.time__dot}>:</div>
                <div className={styles.time__reasult}>
                  <span>
                    {Timer !== undefined
                      ? Timer.minutes > 9
                        ? Timer?.minutes
                        : `0${Timer?.minutes}`
                      : `00`}
                  </span>
                  <span>min.</span>
                </div>
                <div className={styles.time__dot}>:</div>
                <div className={styles.time__reasult}>
                  <span>
                    {Timer !== undefined
                      ? Timer.second > 9
                        ? Timer?.second
                        : `0${Timer?.second}`
                      : `00`}
                  </span>
                  <span>sek.</span>
                </div>
              </div>
              <div className={styles.saleProduct__btns}>
                <button
                  onClick={() =>
                    setEditSale((prev) => ({
                      active: true,
                      id: ActiveSale._id,
                      ePrice: prev.ePrice,
                    }))
                  }
                >
                  Edytuj promocje
                </button>
                <button onClick={() => removeSaleProduct(ActiveSale._id)}>
                  Usuń promocje
                </button>
              </div>
              {EditSale.active && EditSale.id === ActiveSale._id ? (
                <div className={styles.queueEditMain}>
                  <span>Dodaj cenę</span>
                  <input
                    type="number"
                    value={EditSale.ePrice}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEditSale((prev: edit) => ({
                        active: prev.active,
                        id: prev.id,
                        ePrice: e.target.value,
                      }))
                    }
                  />
                  <div>
                    <button onClick={editSaleProduct}>Zapisz</button>
                    <button
                      onClick={() =>
                        setEditSale({ active: false, id: "0", ePrice: "0" })
                      }
                    >
                      Anuluj
                    </button>
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <AiOutlinePlus className={styles.AddIcon} />
          )}
        </div>
      </div>
      <div className={styles.queue}>
        <div className={styles.addQueue}>
          <span>Kolejka</span>
          <button onClick={() => setActive(true)}>Dodaj</button>
        </div>
        <ul className={styles.queueList}>
          {Products ? (
            Products.map((item, id) => (
              <li key={id}>
                <img src={item.img} alt={item.category} />
                <div className={styles.queueListEl__body}>
                  <span className={styles.queueListEl__name}>{item.name}</span>
                  <div className={styles.queueListEl__price}>
                    <div>
                      Cena: <span>{item.newPrice}zł</span>
                    </div>
                    <div>
                      Cena: <span>{item.price}zł</span>
                    </div>
                  </div>
                  <div className={styles.queueListEl__btns}>
                    <button
                      onClick={() =>
                        setEditSale((prev) => ({
                          active: true,
                          id: item._id,
                          ePrice: prev.ePrice,
                        }))
                      }
                    >
                      Edytuj
                    </button>
                    <button onClick={() => removeSaleProduct(item._id)}>
                      Usuń
                    </button>
                  </div>
                </div>
                <span className={styles.queueNum}>{item.queue}</span>
                {EditSale.active && EditSale.id === item._id ? (
                  <div className={styles.queueEdit}>
                    <span>Dodaj cenę</span>
                    <input
                      type="number"
                      value={EditSale.ePrice}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEditSale((prev: edit) => ({
                          active: prev.active,
                          id: prev.id,
                          ePrice: e.target.value,
                        }))
                      }
                    />
                    <div>
                      <button onClick={editSaleProduct}>Zapisz</button>
                      <button
                        onClick={() =>
                          setEditSale({ active: false, id: "0", ePrice: "0" })
                        }
                      >
                        Anuluj
                      </button>
                    </div>
                  </div>
                ) : null}
              </li>
            ))
          ) : (
            <ThreeDots
              height="120"
              width="120"
              radius="9"
              color="#4895ef"
              ariaLabel="three-dots-loading"
              wrapperClass={styles.LoaderSale}
              visible={true}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
