import { AXIOS } from "../config/_axios";

export const create = async (todo) => {
  try {
    const response = await AXIOS.post("/todo", todo);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    throw new error("Problem inserting, check if database is connected");
  }
};
