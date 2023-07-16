"use client";
import styles from "./PageStyle.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useState } from "react";
import { LoginType } from "@/types/type";
import { useRouter } from "next/navigation";

export default function Panel() {
  const { push } = useRouter();
  const [LoginValue, setLoginValue] = useState<LoginType>({
    email: "",
    password: "",
  });
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (LoginValue.email === "" || LoginValue.password === "") return;
    try {
      await signInWithEmailAndPassword(
        auth,
        LoginValue.email,
        LoginValue.password
      ).then(() => push("/dashboard"));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginMain}>
        <h1>SHOP CMS</h1>
        <form onSubmit={login}>
          <label className={styles.loginUser}>
            <span>Email</span>
            <input
              type="email"
              placeholder="..."
              value={LoginValue.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLoginValue((prev: LoginType) => ({
                  email: e.target.value,
                  password: prev.password,
                }))
              }
            />
          </label>
          <label className={styles.loginPasswd}>
            <span>Hasło</span>
            <input
              type="password"
              placeholder="..."
              value={LoginValue.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLoginValue((prev: LoginType) => ({
                  email: prev.email,
                  password: e.target.value,
                }))
              }
            />
          </label>
          <button type="submit">Zaloguj się</button>
        </form>
      </div>
    </div>
  );
}
