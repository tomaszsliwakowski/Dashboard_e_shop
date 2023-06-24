import Widget from "./_widget";
import styles from "./dashboard.module.css";

const tb = [
  { id: 1, user: "John Stone", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stone", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stone", data: "09.05.2022", cash: 4500 },
  { id: 1, user: "John Stoen", data: "09.05.2022", cash: 4500 },
];

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.panel}>
        <Widget />
      </div>
      <div className={styles.lastOrders}>
        <h2>Ostatnie zamówienia</h2>
        <div className={styles.Tableslider}>
          <table className={styles.table}>
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
