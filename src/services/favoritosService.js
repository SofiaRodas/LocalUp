import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";



export const agregarFavorito = async (
  userId,
  lugarId
) => {

  await addDoc(
    collection(db, "favoritos"),
    {
      userId,
      lugarId,
      fecha: new Date()
    }
  );
};