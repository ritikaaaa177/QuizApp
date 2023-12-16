// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwMV81Ll3CjBtlvBINo2FIokAmp1CbAV4",
  authDomain: "focus-app-b267f.firebaseapp.com",
  projectId: "focus-app-b267f",
  storageBucket: "focus-app-b267f.appspot.com",
  messagingSenderId: "412932459247",
  appId: "1:412932459247:web:c014ddcf55afb67a9c291a",
  measurementId: "G-2SE3016K40",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
