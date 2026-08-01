import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const registrarUsuario = async (nombre, email, password) => {
  const respuesta = await axios.post(`${API_URL}/usuarios/registro`, {
    nombre,
    email,
    password
  });

  return respuesta.data.usuario;
};


export const iniciarSesion = async (email, password) => {
  const respuesta = await axios.post(`${API_URL}/usuarios/login`, {
    email,
    password
  });

  return respuesta.data.usuario;
};



export const cerrarSesion = async () => {
  return true;
};