import styles from "./dashboard.module.css";
import { SlBasket } from "react-icons/sl";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.panel}>
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
      </div>
      <div className={styles.lastOrders}>last</div>
    </div>
  );
}
