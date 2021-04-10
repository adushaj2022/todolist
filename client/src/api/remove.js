import { AXIOS } from "../config/_axios";

export const remove = async (id) => {
  try {
    const response = await AXIOS.delete(`/todo/${id}`);
    if (response.status === 204) {
      return true;
    }
    return false;
  } catch (error) {
    throw new error(
      "Problem deleting, check if database is connected or if todo exists"
    );
  }
};
