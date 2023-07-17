import styles from "../PageStyle.module.css";
import { SlBasket } from "react-icons/sl";
import { MdAttachMoney } from "react-icons/md";
import { BiUser } from "react-icons/bi";

export default function Widget() {
  return (
    <>
      <div className={styles.widget}>
        <div className={styles.widget__top}>
          <div className={styles.widget__icon}>
            <span>
              <SlBasket />
            </span>
          </div>
          <div className={styles.widget__reasult}>
            <span>100</span>
          </div>
        </div>
        <div className={styles.widget__bottom}>
          <span>Zamówienia</span>
          <span>Ostatnie 24H</span>
        </div>
      </div>
      <div className={styles.widget}>
        <div className={styles.widget__top}>
          <div className={styles.widget__icon}>
            <span>
              <MdAttachMoney />
            </span>
          </div>
          <div className={styles.widget__reasult}>
            <span>1000zł</span>
          </div>
        </div>
        <div className={styles.widget__bottom}>
          <span>Sprzedaż</span>
          <span>Ostatnie 24H</span>
        </div>
      </div>
      <div className={styles.widget}>
        <div className={styles.widget__top}>
          <div className={styles.widget__icon}>
            <span>
              <BiUser />
            </span>
          </div>
          <div className={styles.widget__reasult}>
            <span>50</span>
          </div>
        </div>
        <div className={styles.widget__bottom}>
          <span>Klienci</span>
          <span>Od początku</span>
        </div>
      </div>
    </>
  );
}
