import { AXIOS } from "../config/_axios";

export const update = async (id) => {
  try {
    const response = await AXIOS.put("/todo/complete", { id });
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    throw new error(
      "Problem updating, check if database is connected or if todo exists"
    );
  }
};
