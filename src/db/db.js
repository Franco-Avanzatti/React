import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNjlzbG42rtEAcLR5Xx7u8nnyIg8bYy2c",
  authDomain: "ecommerce-react-63afb.firebaseapp.com",
  projectId: "ecommerce-react-63afb",
  storageBucket: "ecommerce-react-63afb.firebasestorage.app",
  messagingSenderId: "428311384349",
  appId: "1:428311384349:web:cca456b5c359ca989e11f4"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;