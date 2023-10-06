"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useEffect, useState } from "react";
import { LoginType } from "@/types/type";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { ThreeDots } from "react-loader-spinner";

const USER_NOT_EXIST = "Użytkownik nie znaleziony";
const WRONG_PASSWORD = "Podano złe hasło";
const TO_MANY_REQUEST = "Za dużo nieudanych prób logowania, spróbuj później";

export default function Panel() {
  const { push } = useRouter();
  const [user, setuser] = useState<string | undefined | null>(undefined);
  const [error, setError] = useState({});
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
      )
        .then(() => {
          setError("");
          push("/dashboard");
        })
        .catch((res) => {
          if (res.message.includes("user-not-found")) {
            setError(USER_NOT_EXIST);
          }
          if (res.message.includes("wrong-password")) {
            setError(WRONG_PASSWORD);
          }
          if (res.message.includes("too-many-requests")) {
            setError(TO_MANY_REQUEST);
          }
        });
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        push("/dashboard");
        setuser(currentUser?.email);
      } else {
        setuser("not-logged");
      }
    });
  }, []);

  return (
    <>
      {user !== "not-logged" ? (
        <div className="flex justify-center items-center min-h-screen">
          <ThreeDots
            height="120"
            width="120"
            radius="9"
            color="#4895ef"
            ariaLabel="three-dots-loading"
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : null}
      {user === "not-logged" ? (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen min-w-full flex justify-center items-center">
          <div className="bg-white w-full max-w-md py-5 px-10 border-none rounded-xl flex flex-col justify-between gap-5">
            <h1 className="text-3xl font-bold py-2">CMS Logowanie</h1>
            <form onSubmit={login} className="flex flex-col gap-6">
              <label className="flex flex-col">
                <span className="px-1">Email</span>
                <input
                  className="outline-none border-solid border-2 border-slate-300  rounded-xl px-2 py-1 w-full max-w-4xl"
                  type="email"
                  value={LoginValue.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLoginValue((prev: LoginType) => ({
                      email: e.target.value,
                      password: prev.password,
                    }))
                  }
                />
                {error === USER_NOT_EXIST ? (
                  <span className="px-1 py-1 text-red-600">{error}</span>
                ) : null}
              </label>
              <label className="flex flex-col">
                <span className="px-1">Hasło</span>
                <input
                  className="outline-none border-solid border-2 border-slate-300 rounded-xl px-2 py-1"
                  type="password"
                  value={LoginValue.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLoginValue((prev: LoginType) => ({
                      email: prev.email,
                      password: e.target.value,
                    }))
                  }
                />
                {error === WRONG_PASSWORD || error === TO_MANY_REQUEST ? (
                  <span className="px-1 py-1 text-red-600 text-sm">
                    {error}
                  </span>
                ) : null}
              </label>
              <button
                type="submit"
                className="font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-solid rounded-xl mx-0 my-3 mt-5 py-2"
              >
                Zaloguj się
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
