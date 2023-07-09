"use client";
import styles from "../dashboard.module.css";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
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

export default function Products() {
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [sortOptValue, setSortOptValue] = useState(0);
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
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
            <li>
              <img src={prod.img} alt="" />
              <div className={styles.productsListEl__body}>
                <span className={styles.productsListEl__name}>{prod.name}</span>
                <div className={styles.productsListEl__price}>
                  <div>
                    Cena: <span>{prod.price}zł</span>
                  </div>
                </div>
                <div className={styles.productsListEl__btns}>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
