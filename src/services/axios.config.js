import axios from "axios";

const URL = "https://67447b46b4e2e04abea2620a.mockapi.io/sotck";

export const axiosIntsance = axios.create({
  baseURL: URL,
});
