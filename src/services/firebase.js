// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP7BP_1HhSk0QKDEc4F4JiwSGQKIopLhE",
  authDomain: "react-auth-26cab.firebaseapp.com",
  projectId: "react-auth-26cab",
  storageBucket: "react-auth-26cab.firebasestorage.app",
  messagingSenderId: "971328856709",
  appId: "1:971328856709:web:752c80626b5571aca9bfec",
  measurementId: "G-CTGLYLJ37V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);