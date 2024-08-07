import axios from "axios";
import UserPost from "../models/UserPost";

const baseURL: string =
  "https://jsonplaceholder.typicode.com/posts" || "No URL";

const getUserPosts = (): Promise<UserPost[]> => {
  return axios
    .get(baseURL)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default getUserPosts;
