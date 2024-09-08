import CanceledError from "axios";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "94149b04df7a41e2adaa3801017a98f0",
  },
});

export { CanceledError };
