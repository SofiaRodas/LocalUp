import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { db } from "../firebase/firebaseConfig";

import {
  doc,
  setDoc
} from "firebase/firestore";


export const registrarUsuario = async (
  nombre,
  email,
  password
) => {

  const credenciales =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  const usuario =
    credenciales.user;

  await setDoc(
    doc(
      db,
      "usuarios",
      usuario.uid
    ),
    {
      nombre,
      ubicacion: "",
      descripcion: "",
      tipoUsuario: "cliente",
      fotoPerfil: "",
      correo: email
    }
  );

  return usuario;
};


export const iniciarSesion = async (
  email,
  password
) => {

  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};



export const cerrarSesion = async () => {

  return await signOut(auth);

};