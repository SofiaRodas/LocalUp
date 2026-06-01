import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAnAL-NwqwVBv8xCzOTaq1LeJ5jGfZcUw",
  authDomain: "localup-5224d.firebaseapp.com",
  projectId: "localup-5224d",
  storageBucket: "localup-5224d.firebasestorage.app",
  messagingSenderId: "214959891023",
  appId: "1:214959891023:web:7e755528d7288fa6d3003a",
  measurementId: "G-SVPGYGQJYS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;