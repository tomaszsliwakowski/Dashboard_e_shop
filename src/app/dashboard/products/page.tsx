"use client";
import styles from "../../PageStyle.module.css";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AiFillCaretUp, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { PRODUCT } from "@/types/type";
import { ThreeDots } from "react-loader-spinner";
const prod = {
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_10_29_57_140_02.jpg",
  name: "Apple iPhone 14 128GB Starlight",
  price: 3999.0,
  oldprice: 4249.0,
};
const sortOpt = [
  "Wszystko",
  "Smartphony",
  "Laptopy",
  "Komputery",
  "Podzespoły",
  "Akcesoria",
];
const sortValue = [
  "all",
  "Smartphone",
  "Laptop",
  "Komputer",
  "Komponenty",
  "Akcesoria",
];
export default function Products() {
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [sortOptValue, setSortOptValue] = useState(0);
  const [Product, setProduct] = useState<PRODUCT[] | undefined>(undefined);
  const HandleSortOpt = (num: number) => {
    setSortOptValue(num);
    setOpenSort(false);
  };

  useEffect(() => {
    const close = (e: Event) => {
      let target = e.target as HTMLElement;
      if (target.id !== "sort") {
        setOpenSort(false);
      }
    };
    document.body.addEventListener("click", close);
    return () => {
      document.body.removeEventListener("click", close);
    };
  }, []);

  useEffect(() => {
    axios
      .get("https://dashboard-e-shop.vercel.app/api/product")
      .then((reasult) => {
        let data = reasult.data["Product"][0];
        setProduct((reasult) => {
          if (sortValue[sortOptValue] === "all") {
            return data.products;
          } else {
            return data.products.filter(
              (item: PRODUCT) => item.category === sortValue[sortOptValue]
            );
          }
        });
      });
  }, [sortOptValue]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.products}>
        <h2>Produkty</h2>
        <div className={styles.products__filters}>
          <div className={styles.SortID}>
            <input
              type="text"
              placeholder="Wyszukaj"
              className={styles.SortInput}
            />
            <button className={styles.SortBtn}>
              <BiSearch />
            </button>
          </div>
          <div
            className={`${styles.SortData} ${openSort ? styles.open : null}`}
          >
            <span className={styles.SortDataShow}>
              <span>{sortOpt[sortOptValue]}</span>
              {openSort ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </span>
            <input
              type="checkbox"
              checked={openSort}
              id="sort"
              onChange={() => setOpenSort((prev) => !prev)}
            />
            {openSort ? (
              <ul className={styles.DataList}>
                {sortOpt.map((item, id) => (
                  <li key={id} id="sort" onClick={() => HandleSortOpt(id)}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className={styles.products__show}>
          <ul className={styles.products__list}>
            {Product ? (
              <li>
                <AiOutlinePlus className={styles.products__add} size={80} />
              </li>
            ) : null}
            {Product ? (
              Product.map((item: PRODUCT, id: number) => (
                <li key={id}>
                  <img src={item.img} alt={item.category} />
                  <div className={styles.productsListEl__body}>
                    <span className={styles.productsListEl__name}>
                      {item.name}
                    </span>
                    <div className={styles.productsListEl__price}>
                      <div>
                        Cena: <span>{item.price}zł</span>
                      </div>
                    </div>
                    <div className={styles.productsListEl__btns}>
                      <button>Edytuj</button>
                      <button>Usuń</button>
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
    </div>
  );
}
