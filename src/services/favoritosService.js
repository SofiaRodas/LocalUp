import {
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const agregarFavorito = async (
  userId,
  lugarId
) => {

  const consulta = query(
    collection(db, "favoritos"),
    where("userId", "==", userId),
    where("lugarId", "==", lugarId)
  );

  const existe = await getDocs(
    consulta
  );

  if (!existe.empty) {

    alert("Este lugar ya está en favoritos");

    return;
  }

  await addDoc(
    collection(db, "favoritos"),
    {
      userId,
      lugarId,
      fecha: new Date()
    }
  );

  alert("Lugar agregado a favoritos");
};

export const obtenerFavoritos = async (
  userId
) => {

  const consulta = query(
    collection(db, "favoritos"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(
    consulta
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};