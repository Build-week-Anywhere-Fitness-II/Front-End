import axios from "axios";

export const Auth = () => {
  const token = window.sessionStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: 'Bearer ' + token,
    },
    baseURL: "https://pt-anywhere-fitness.herokuapp.com/",
  });
};