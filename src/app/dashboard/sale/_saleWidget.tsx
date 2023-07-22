"use client";
import { TimerType, queueProduct } from "@/types/type";
import styles from "../../PageStyle.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

type props = {
  Timer: TimerType | undefined;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SaleWidget({ Timer, setActive }: props) {
  const [Products, setProducts] = useState<queueProduct[] | undefined>(
    undefined
  );
  const [ActiveSale, setActiveSale] = useState<queueProduct | undefined>(
    undefined
  );
  function sortQueue(a: number, b: number) {
    return a - b;
  }
  useEffect(() => {
    axios.get("http://localhost:8080/api/product/queue").then((resault) => {
      const data: queueProduct[] = resault.data["Product"];
      setActiveSale(resault.data["Product"][0]);
      setProducts(
        data
          .filter((item) => item.id !== 0)
          .sort(function (a, b) {
            return a.queue - b.queue;
          })
      );
    });
  }, []);
  console.log(ActiveSale);
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
                <button>Edytuj promocje</button>
                <button>Usuń promocje</button>
              </div>
              {false ? (
                <div className={styles.queueEditMain}>
                  <span>Dodaj cenę</span>
                  <input type="number" value={2999.0} />
                  <div>
                    <button>Zapisz</button>
                    <button>Anuluj</button>
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
          {Products &&
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
                    <button>Edytuj</button>
                    <button>Usuń</button>
                  </div>
                </div>
                <span className={styles.queueNum}>{item.queue}</span>
                {false ? (
                  <div className={styles.queueEdit}>
                    <span>Dodaj cenę</span>
                    <input type="number" value={2999.0} />
                    <div>
                      <button>Zapisz</button>
                      <button>Anuluj</button>
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
