import {
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const obtenerUsuario = async (uid) => {

  const referencia = doc(
    db,
    "usuarios",
    uid
  );

  const documento = await getDoc(referencia);

  if (documento.exists()) {

    return documento.data();

  }

  return null;
};

export const actualizarUsuario = async (
  uid,
  datos
) => {

  const referencia = doc(
    db,
    "usuarios",
    uid
  );

  await updateDoc(
    referencia,
    datos
  );
};