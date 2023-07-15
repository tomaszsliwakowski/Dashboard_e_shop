"use client";
import styles from "../../PageStyle.module.css";
import { BiSearch } from "react-icons/bi";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useEffect, useState } from "react";

const tb = [
  { id: 1, user: "John Stone", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stone", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stone", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
];

const sortOpt = ["Cały czas", "24h", "7dni", "30dni", "365dni"];

export default function Orders() {
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
      <div className={styles.Orders}>
        <h2>Zamówienia (8)</h2>
        <div className={styles.SortOrders}>
          <div className={styles.SortID}>
            <input
              type="text"
              placeholder="Wyszukaj po ID"
              className={styles.SortInput}
            />
            <button className={styles.SortBtn}>
              <BiSearch />
            </button>
          </div>
          <div className={styles.SortCust}>
            <input
              type="text"
              className={styles.SortInput}
              placeholder="Wyszukaj po kliencie"
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
        <div className={`${styles.Tableslider} ${styles.OrdersSlider}`}>
          <table className={`${styles.table} ${styles.OrdersTable}`}>
            <thead>
              <tr>
                <th>ID</th>
              </tr>
              <tr>
                <th>Klient</th>
              </tr>
              <tr>
                <th>Data</th>
              </tr>
              <tr>
                <th>Kwota</th>
              </tr>
              <tr>
                <th>Więcej</th>
              </tr>
            </thead>
            <tbody>
              {tb.map((item, id) => (
                <tr className={styles.row} key={id}>
                  <td>{item.id}</td>
                  <td>{item.user}</td>
                  <td>{item.data}</td>
                  <td>{item.cash}</td>
                  <td className={styles.GoToMore}>Szczegóły</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
