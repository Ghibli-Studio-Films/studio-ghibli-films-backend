import axios from "axios";

export const ghibli = axios.create({
  baseURL: "https://ghibliapi.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
