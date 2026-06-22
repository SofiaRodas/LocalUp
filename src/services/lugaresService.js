import {
  collection,
  getDocs,
  doc,
  getDoc
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const obtenerLugares = async () => {

  const lugaresRef = collection(
    db,
    "lugares"
  );

  const snapshot = await getDocs(
    lugaresRef
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const obtenerLugarPorId = async (
  id
) => {

  const referencia = doc(
    db,
    "lugares",
    id
  );

  const snapshot = await getDoc(
    referencia
  );

  if (!snapshot.exists()) {

    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};