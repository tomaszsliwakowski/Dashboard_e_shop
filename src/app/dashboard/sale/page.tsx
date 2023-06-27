"use client";
import { TimerType } from "@/types/type";
import styles from "../dashboard.module.css";
import { useState, useEffect } from "react";

const prod = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_10_29_57_140_02.jpg",
  name: "Apple iPhone 14 128GB Starlight",
  price: 3999.0,
  oldprice: 4249.0,
};

export default function Sale() {
  const [Timer, setTimer] = useState<TimerType | undefined>();
  const TimeToExpire = () => {
    let dateTomorrow: Date = new Date();
    let date: Date = new Date();
    let tomorrow: Date = new Date(
      dateTomorrow.setDate(dateTomorrow.getDate() + 1)
    );
    let expireToday: number = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      12,
      0,
      0,
      0
    ).getTime();
    let expiretomorrow: number = new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      12,
      0,
      0,
      0
    ).getTime();
    if (date.getHours() >= 12) {
      let remainingTime: number = expiretomorrow - date.getTime();
      setTimer({
        second: Math.floor((remainingTime / 1000) % 60),
        minutes: Math.floor((remainingTime / 1000 / 60) % 60),
        hour: Math.floor(remainingTime / 1000 / 60 / 60),
      });
    } else {
      let remainingTime: number = expireToday - date.getTime();
      setTimer({
        second: Math.floor((remainingTime / 1000) % 60),
        minutes: Math.floor((remainingTime / 1000 / 60) % 60),
        hour: Math.floor(remainingTime / 1000 / 60 / 60),
      });
    }
  };
  useEffect(() => {
    setInterval(() => {
      TimeToExpire();
    }, 1000);
  }, []);
  return (
    <div className={styles.dashboard}>
      <div className={styles.sale}>
        <h2>Gorący strzał</h2>
        <div className={styles.saleContainer}>
          <div className={styles.activeSale}>
            <span className={styles.saleATitle}>Aktualny produkt</span>
            <div className={styles.saleProduct}>
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
            </div>
          </div>
          <div className={styles.queue}>
            <div className={styles.addQueue}>
              <span>Kolejka</span>
              <button>dodaj do kolejki</button>
            </div>
            <ul className={styles.queueList}>
              <li>produkt w kolejce</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
