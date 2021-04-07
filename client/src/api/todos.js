import { AXIOS } from "../config/_axios";
export const getTodos = async () => {
  const response = await AXIOS.get("/todos");
  return response?.data;
};
