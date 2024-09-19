import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-application-5653f.firebaseapp.com",
  projectId: "react-chat-application-5653f",
  storageBucket: "react-chat-application-5653f.appspot.com",
  messagingSenderId: "655204496581",
  appId: "1:655204496581:web:5e9dc61987569ce51a6cac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()