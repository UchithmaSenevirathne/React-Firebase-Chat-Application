import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fir-practice-ae942.firebaseapp.com",
  projectId: "fir-practice-ae942",
  storageBucket: "fir-practice-ae942.appspot.com",
  messagingSenderId: "1080804585165",
  appId: "1:1080804585165:web:af63b5a07ce7368d9f0384"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()