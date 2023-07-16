import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

type firetype = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const firebaseConfig: firetype = {
  apiKey: "AIzaSyDjT8wEBta3lMW1AgVbMpoUzyee1sv-daE",
  authDomain: "shop-cms-9da19.firebaseapp.com",
  projectId: "shop-cms-9da19",
  storageBucket: "shop-cms-9da19.appspot.com",
  messagingSenderId: "1069577216181",
  appId: "1:1069577216181:web:69322a84c67ef9de4fdefc",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
