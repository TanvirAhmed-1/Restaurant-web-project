import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "https://restaurent-server-ashen.vercel.app",
});

const useAxios = () => {
  return BaseUrl;
};

export default useAxios;
