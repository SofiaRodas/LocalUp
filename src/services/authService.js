import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";



export const registrarUsuario = async (
  email,
  password
) => {

  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
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