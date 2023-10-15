"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { auth } from "../../firebase/config";

type PROPS = {
  openMenu: boolean;
};

export default function MenuUser(props: PROPS) {
  const { openMenu } = props;
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser.email);
      }
    });
  }, []);

  return (
    <div
      className={`${
        openMenu ? "mt-5 mb-8 w-full" : "mt-5 mb-8 w-full max-md:hidden"
      }`}
    >
      <span className="text-lg flex gap-3 px-4 py-2 justify-start items-center text-white ">
        <AiOutlineUser size={30} /> {user.split("@")[0]}
      </span>
    </div>
  );
}
