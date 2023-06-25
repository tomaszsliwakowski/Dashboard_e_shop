import styles from "../dashboard.module.css";

export default function Sale() {
  return (
    <div className={styles.dashboard}>
      <div>
        <h2>Gorący strzał</h2>
        <div>
          <div>Aktualny produkt</div>
          <div>
            <div>
              <span>Kolejka</span>
              <button>dodaj do kolejki</button>
            </div>
            <ul>
              <li>produkt w kolejce</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
