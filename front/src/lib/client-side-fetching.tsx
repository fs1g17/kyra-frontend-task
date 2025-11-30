"use client";

import axios from "axios";

const clientFetch = axios.create({
  // No baseURL needed - Next.js rewrites handle API proxying to backend
});

clientFetch.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - could redirect to login
    }
    return Promise.reject(error);
  }
);

export default clientFetch;
