import styles from "../dashboard.module.css";

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

export default function Orders() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.Orders}>
        <h2>Zamówienia (8)</h2>
        <div className={styles.SortOrders}>
          <div className={styles.SortID}>
            <input type="text" />
            <button>S</button>
          </div>
          <div className={styles.SortCust}>
            <input type="text" />
            <button>S</button>
          </div>
          <div className={styles.SortData}>SELECT</div>
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
                <tr className={styles.row}>
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
