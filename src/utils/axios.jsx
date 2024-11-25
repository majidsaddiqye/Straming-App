import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTVhNTJjYzJjYTFhYjkwM2U3MWE5NTBiZjRjOTNjNSIsIm5iZiI6MTczMjE0MDUxNi44NTM5ODE1LCJzdWIiOiI2NzNlNTQzZGU0ZGVjYWRlZjU2YzY2MTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KBKe7rQaA2QoW6BxFH40_gd3gBRGMRdOjL40C9tDOWI",
  },
});

export default instance;
