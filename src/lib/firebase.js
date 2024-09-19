import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-application-f4d80.firebaseapp.com",
  projectId: "chat-application-f4d80",
  storageBucket: "chat-application-f4d80.appspot.com",
  messagingSenderId: "414606675940",
  appId: "1:414606675940:web:9cfb2e96255068764001f1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
