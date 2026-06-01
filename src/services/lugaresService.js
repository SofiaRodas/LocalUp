import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const obtenerLugares = async () => {

  const lugaresRef = collection(db, "lugares");

  const snapshot = await getDocs(lugaresRef);

  const lugares = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return lugares;
};