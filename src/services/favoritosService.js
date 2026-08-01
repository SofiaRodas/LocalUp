import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const agregarFavorito = async (userId, lugarId) => {
  try {
    await axios.post(`${API_URL}/favoritos`, {
      userId,
      lugarId
    });

    alert("Lugar agregado a favoritos");
  } catch (error) {
    if (error.response?.status === 409) {
      alert("Este lugar ya está en favoritos");
      return;
    }
    throw error;
  }
};

export const obtenerFavoritos = async (userId) => {
  const respuesta = await axios.get(`${API_URL}/favoritos`, {
    params: { userId }
  });

  return respuesta.data;
};