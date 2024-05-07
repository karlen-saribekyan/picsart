import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  formSerializer: {
    dots: true,
    indexes: null
  }
});

export { api };
