import axios from "axios";

export const Auth = () => {
  const token = window.sessionStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:3300/",
  });
};