import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5004/api/V1/restaurants",
});
