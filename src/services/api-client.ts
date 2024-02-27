import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a95531540da5484398dcc233bfa34eda",
  },
});
