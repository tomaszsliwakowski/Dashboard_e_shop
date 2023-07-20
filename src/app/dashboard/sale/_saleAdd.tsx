"use client";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../../PageStyle.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCT } from "@/types/type";

type props = {
  prod: any;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};
type prodAddOpt = {
  newPrice: number;
  queue: number;
};

export default function SaleAdd({ prod, setActive, active }: props) {
  const [ProductToAdd, setProductToAdd] = useState<PRODUCT | undefined>(
    undefined
  );
  const [Product, setProduct] = useState<PRODUCT[] | undefined>(undefined);
  const [ProductAddOptions, setProductAddOptions] = useState<prodAddOpt>({
    newPrice: 0,
    queue: 1,
  });
  useEffect(() => {
    axios.get("http://localhost:8080/api/product").then((reasult) => {
      let data = reasult.data["Product"][0];
      setProduct(data.products);
    });
  }, []);

  const removeProductToAdd = () => {
    setProductAddOptions({ newPrice: 0, queue: 1 });
    setProductToAdd(undefined);
  };
  return (
    <div className={styles.saleContainer}>
      <div className={styles.activeSale}>
        <span className={styles.saleATitle}>Produkt</span>
        <div className={styles.saleProduct}>
          {ProductToAdd ? (
            <>
              <img src={ProductToAdd.img} alt={ProductToAdd.category} />
              <span className={styles.saleProduct__name}>
                {ProductToAdd.name}
              </span>
              <div className={styles.saleProduct__panel}>
                <div className={styles.saleProduct__panelOne}>
                  <div>
                    <span>Cena: </span>
                    <span>{ProductToAdd.price.toFixed(2)}zł</span>
                  </div>
                  <div className={styles.saleProduct__priceAdd}>
                    <span>Nowa cena: </span>
                    <input
                      type="number"
                      value={ProductAddOptions.newPrice}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setProductAddOptions((prev) => ({
                          queue: prev.queue,
                          newPrice: parseInt(e.target.value),
                        }))
                      }
                    />
                    <span>zł</span>
                  </div>
                </div>
                <div className={styles.saleProduct__panelTwo}>
                  <span>Miejscie w kolejce: </span>
                  <input
                    type="number"
                    value={ProductAddOptions.queue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setProductAddOptions((prev) => ({
                        newPrice: prev.newPrice,
                        queue: parseInt(e.target.value),
                      }))
                    }
                  />
                </div>
              </div>
              <div className={styles.saleProduct__btns}>
                <button>Dodaj</button>
                <button onClick={() => removeProductToAdd()}>Usuń</button>
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
          {active ? (
            <button className={styles.QuitAdd} onClick={() => setActive(false)}>
              Wyjdź
            </button>
          ) : null}
        </div>
        <ul
          className={styles.queueList}
          style={{ borderRadius: `${active ? "1rem 0rem 0rem 1rem" : "1rem"}` }}
        >
          {Product &&
            Product.map((item: PRODUCT, id: number) => (
              <li key={id}>
                <img src={item.img} alt={item.category} />
                <div className={styles.queueListEl__body}>
                  <span className={styles.queueListEl__name}>{item.name}</span>
                  <div className={styles.queueListEl__priceAdd}>
                    <div>
                      Cena: <span>{item.price}zł</span>
                    </div>
                  </div>
                  <div className={styles.queueListEl__btnsAdd}>
                    <button onClick={() => setProductToAdd(item)}>Dodaj</button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
