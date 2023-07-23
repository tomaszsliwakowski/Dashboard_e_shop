"use client";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../../PageStyle.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCT } from "@/types/type";
import { ThreeDots } from "react-loader-spinner";

type props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};
type prodAddOpt = {
  newPrice: string;
  queue: string;
};

export default function SaleAdd({ setActive, active }: props) {
  const [ProductToAdd, setProductToAdd] = useState<PRODUCT | undefined>(
    undefined
  );
  const [Product, setProduct] = useState<PRODUCT[] | undefined>(undefined);
  const [ProductAddOptions, setProductAddOptions] = useState<prodAddOpt>({
    newPrice: "0",
    queue: "1",
  });
  useEffect(() => {
    axios.get("http://localhost:8080/api/product").then((reasult) => {
      let data = reasult.data["Product"][0];
      setProduct(data.products);
    });
  }, []);

  const removeProductToAdd = () => {
    setProductAddOptions({ newPrice: "0", queue: "1" });
    setProductToAdd(undefined);
  };
  const AddProductToQueue = () => {
    let SalePrice =
      ProductAddOptions.newPrice !== ""
        ? parseInt(ProductAddOptions.newPrice)
        : 0;
    let queueNum =
      ProductAddOptions.queue !== "" ? parseInt(ProductAddOptions.queue) : 0;
    let Product =
      typeof ProductToAdd?.id === "number" ? ProductToAdd : undefined;

    if (Product && SalePrice !== 0 && queueNum !== 0) {
      const ProductToSave = {
        id: Product.id,
        img: Product.img,
        name: Product.name,
        producer: Product.producer,
        price: Product.price,
        newPrice: SalePrice,
        queue: queueNum,
        category: Product.category,
        opinion: Product.opinion,
        spec: Product.spec,
      };

      axios
        .post(
          "http://localhost:8080/api/product/queue",
          JSON.stringify(ProductToSave)
        )
        .then(() => setActive((prev) => !prev))
        .catch((err) => console.log(err.message));
    }
  };

  const HandleProductOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductAddOptions((prev: prodAddOpt) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
                      name="newPrice"
                      min={0}
                      value={ProductAddOptions.newPrice}
                      onChange={HandleProductOptions}
                    />
                    <span>zł</span>
                  </div>
                </div>
                <div className={styles.saleProduct__panelTwo}>
                  <span>Miejscie w kolejce: </span>
                  <input
                    type="number"
                    min={1}
                    name="queue"
                    value={ProductAddOptions.queue}
                    onChange={HandleProductOptions}
                  />
                </div>
              </div>
              <div className={styles.saleProduct__btns}>
                <button onClick={() => AddProductToQueue()}>Dodaj</button>
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
          {Product ? (
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
