import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9WraMcrR1UC8LHPIuXxcMVhGHNiq8IVk",
  authDomain: "portfolio-cc385.firebaseapp.com",
  projectId: "portfolio-cc385",
  storageBucket: "portfolio-cc385.appspot.com",
  messagingSenderId: "617603371475",
  appId: "1:617603371475:web:1b4a14f11687e6e5645f26",
};

// Initialize Firebase
 initializeApp(firebaseConfig);
const db = getFirestore();

export default {
  db,
};
