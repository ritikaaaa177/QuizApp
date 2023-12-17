import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOWSiRc42OJ4Xz3Ck4-Efhp9uGjRWCoLc",
  authDomain: "techquiz-1c181.firebaseapp.com",
  projectId: "techquiz-1c181",
  storageBucket: "techquiz-1c181.appspot.com",
  messagingSenderId: "1008610377154",
  appId: "1:1008610377154:web:97edaf87e6a29b5fb3aa5b",
  measurementId: "G-X9HCLFBF86",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
