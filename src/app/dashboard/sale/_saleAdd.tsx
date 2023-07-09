"use client";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../dashboard.module.css";
import { useState } from "react";

type props = {
  prod: any;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};
type prod = {
  img: string;
  name: string;
  price: number;
  newPrice: number;
  queue: number;
};

export default function SaleAdd({ prod, setActive }: props) {
  const [ProductToAdd, setProductToAdd] = useState<prod | undefined>(undefined);
  return (
    <div className={styles.saleContainer}>
      <div className={styles.activeSale}>
        <span className={styles.saleATitle}>Produkt</span>
        <div className={styles.saleProduct}>
          {ProductToAdd ? (
            <>
              <img src={prod.img} alt="" />
              <span className={styles.saleProduct__name}>{prod.name}</span>
              <div className={styles.saleProduct__panel}>
                <div className={styles.saleProduct__panelOne}>
                  <div>
                    <span>Cena: </span>
                    <span>{prod.price.toFixed(2)}zł</span>
                  </div>
                  <div className={styles.saleProduct__priceAdd}>
                    <span>Nowa cena: </span>
                    <input type="nubmer" value={2999.0} />
                    <span>zł</span>
                  </div>
                </div>
                <div className={styles.saleProduct__panelTwo}>
                  <span>Miejscie w kolejce: </span>
                  <input type="number" value={1} />
                </div>
              </div>
              <div className={styles.saleProduct__btns}>
                <button>Dodaj</button>
                <button>Usuń</button>
              </div>
            </>
          ) : (
            <AiOutlinePlus className={styles.AddIcon} />
          )}
        </div>
      </div>
      <div className={styles.queue}>
        <div className={styles.addQueue}>
          <span>Produkty</span>
          {!ProductToAdd ? (
            <button className={styles.QuitAdd} onClick={() => setActive(false)}>
              Wyjdź
            </button>
          ) : null}
        </div>
        <ul className={styles.queueList}>
          <li>
            <img src={prod.img} alt="" />
            <div className={styles.queueListEl__body}>
              <span className={styles.queueListEl__name}>{prod.name}</span>
              <div className={styles.queueListEl__priceAdd}>
                <div>
                  Cena: <span>{prod.price}zł</span>
                </div>
              </div>
              <div className={styles.queueListEl__btnsAdd}>
                <button>Dodaj</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
