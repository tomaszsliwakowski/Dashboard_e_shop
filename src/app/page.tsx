import styles from "./PageStyle.module.css";

export default function Panel() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginMain}>
        <h1>SHOP CMS</h1>
        <form>
          <label className={styles.loginUser}>
            <span>Użytkownik</span>
            <input type="text" placeholder="..." />
          </label>
          <label className={styles.loginPasswd}>
            <span>Hasło</span>
            <input type="password" placeholder="..." />
          </label>
          <button>Zaloguj się</button>
        </form>
      </div>
    </div>
  );
}
