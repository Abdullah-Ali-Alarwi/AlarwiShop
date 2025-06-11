import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 👈 Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAofoOinj6nDL0eyD47rWt1bQSwHozMtkc",
  authDomain: "reactecommerce-7f80c.firebaseapp.com",
  projectId: "reactecommerce-7f80c",
  storageBucket: "reactecommerce-7f80c.appspot.com",
  messagingSenderId: "95040819801",
  appId: "1:95040819801:web:c3e06417b4e14120f29748",
  measurementId: "G-TNXRHBCKEC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
