import axios from "axios";

const API_URL = "http://localhost:5001/api/pixels";

export const getPixels = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};