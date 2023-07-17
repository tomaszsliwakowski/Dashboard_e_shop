"use client";
import Link from "next/link";
import styles from "../PageStyle.module.css";
import { RxDashboard } from "react-icons/rx";
import { LuClipboardList } from "react-icons/lu";
import { BsTags } from "react-icons/bs";
import { MdOutlineInventory2 } from "react-icons/md";
import { usePathname } from "next/navigation";
import { ImExit } from "react-icons/im";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useRouter } from "next/navigation";

const route = {
  dashboard: "/dashboard",
  orders: "/dashboard/orders",
  sale: "/dashboard/sale",
  products: "/dashboard/products",
};

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  const [user, setuser] = useState<string | undefined>(undefined);
  const pathname = usePathname();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser?.email?.split("@")[0]);
    });
  }, []);
  const logout = async () => {
    await signOut(auth).then(() => push("/"));
  };
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.logo}>Shop Panel</span>
        <div>
          {user ? <span className={styles.username}>{user}</span> : null}
          <ImExit onClick={logout} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <ul className={styles.nav__list}>
            <li
              className={`${styles.nav__el} ${
                pathname === route.dashboard ? styles.active : null
              }`}
            >
              <Link href={route.dashboard}>
                <RxDashboard />
                <span>Panel</span>
              </Link>
            </li>
            <li
              className={`${styles.nav__el} ${
                pathname === route.orders ? styles.active : null
              }`}
            >
              <Link href={route.orders}>
                <LuClipboardList />
                <span>Zamówienia</span>
              </Link>
            </li>
            <li
              className={`${styles.nav__el} ${
                pathname === route.sale ? styles.active : null
              }`}
            >
              <Link href={route.sale}>
                <BsTags />
                <span>Promocje</span>
              </Link>
            </li>
            <li
              className={`${styles.nav__el} ${
                pathname === route.products ? styles.active : null
              }`}
            >
              <Link href={route.products}>
                <MdOutlineInventory2 />
                <span>Produkty</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.dashboard}>{children}</div>
      </div>
    </div>
  );
}
