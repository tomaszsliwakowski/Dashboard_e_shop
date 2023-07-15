"use client";
import { TimerType } from "@/types/type";
import styles from "../../PageStyle.module.css";
import { useState, useEffect } from "react";
import SaleWidget from "./_saleWidget";
import SaleAdd from "./_saleAdd";

const prod = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_10_29_57_140_02.jpg",
  name: "Apple iPhone 14 128GB Starlight",
  price: 3999.0,
  oldprice: 4249.0,
};

export default function Sale() {
  const [activeAddPanel, setActiveAddPanel] = useState<boolean>(false);
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
        {!activeAddPanel ? (
          <SaleWidget prod={prod} Timer={Timer} setActive={setActiveAddPanel} />
        ) : null}
        {activeAddPanel ? (
          <SaleAdd prod={prod} setActive={setActiveAddPanel} />
        ) : null}
      </div>
    </div>
  );
}
