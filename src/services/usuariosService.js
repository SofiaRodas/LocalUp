import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const obtenerUsuario = async (uid) => {
  try {
    const respuesta = await axios.get(`${API_URL}/usuarios/${uid}`);
    return respuesta.data.usuario;
  } catch (error) {
    if (error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};

export const actualizarUsuario = async (uid, datos) => {
  const respuesta = await axios.put(`${API_URL}/usuarios/${uid}`, datos);
  return respuesta.data.usuario;
};