import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const obtenerLugares = async () => {
  const respuesta = await axios.get(`${API_URL}/lugares`);
  return respuesta.data;
};

export const obtenerLugarPorId = async (id) => {
  try {
    const respuesta = await axios.get(`${API_URL}/lugares/${id}`);
    return respuesta.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};