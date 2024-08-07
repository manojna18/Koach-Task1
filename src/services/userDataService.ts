import axios from "axios";
import User from "../models/User";

const baseURL: string =
  "https://jsonplaceholder.typicode.com/users" || "Base URL not found";

export const getUserData = (): Promise<User[]> => {
  return axios
    .get(baseURL)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
};
