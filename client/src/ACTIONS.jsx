import axios from "axios";
import { CONSTANT } from "./CONSTANT";
export const takeActionOnProduct = async (id, type, callback = null) => {
  await axios
    .post(CONSTANT.server + `api/product/${id}`, {
      type: type,
    })
    .then((responce) => {
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
