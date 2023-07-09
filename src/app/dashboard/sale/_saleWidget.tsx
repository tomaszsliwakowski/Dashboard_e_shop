"use client";
import { TimerType } from "@/types/type";
import styles from "../dashboard.module.css";
import { AiOutlinePlus } from "react-icons/ai";

type props = {
  prod: any;
  Timer: TimerType | undefined;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SaleWidget({ prod, Timer, setActive }: props) {
  return (
    <div className={styles.saleContainer}>
      <div className={styles.activeSale}>
        <span className={styles.saleATitle}>Aktualny produkt</span>
        <div className={styles.saleProduct}>
          {true ? (
            <>
              <img src={prod.img} alt="" />
              <span className={styles.saleProduct__name}>{prod.name}</span>
              <div className={styles.saleProduct__price}>
                <div>
                  <span>Cena promocyjna:</span>
                  <span>{prod.price.toFixed(2)}zł</span>
                </div>
                <div>
                  <span>Cena regularna:</span>
                  <span>{prod.oldprice.toFixed(2)}zł</span>
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
          <li>
            <img src={prod.img} alt="" />
            <div className={styles.queueListEl__body}>
              <span className={styles.queueListEl__name}>{prod.name}</span>
              <div className={styles.queueListEl__price}>
                <div>
                  Cena: <span>{prod.price}zł</span>
                </div>
                <div>
                  Cena: <span>{prod.oldprice}zł</span>
                </div>
              </div>
              <div className={styles.queueListEl__btns}>
                <button>Edytuj</button>
                <button>Usuń</button>
              </div>
            </div>
            <span className={styles.queueNum}>1</span>
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
        </ul>
      </div>
    </div>
  );
}
