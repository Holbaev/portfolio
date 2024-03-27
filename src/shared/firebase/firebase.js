import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBqnUWc6D0a5X2wYtilBaNGWAHZ88-DQPU",
  authDomain: "portfolio-8b7ca.firebaseapp.com",
  projectId: "portfolio-8b7ca",
  storageBucket: "portfolio-8b7ca.appspot.com",
  messagingSenderId: "450975647759",
  appId: "1:450975647759:web:3f3701bb329f30c39abb7a",
  measurementId: "G-1THSWQEZX3"
};


const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export  {db , firebase}