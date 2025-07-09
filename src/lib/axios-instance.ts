// // lib/axios-instance.ts
// import axios from "axios";

// // You can store token in localStorage/cookies or manage via state
// const token =
//   typeof window !== "undefined" ? localStorage.getItem("token") : null;

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // 🔐 Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ❌ Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.warn("Unauthorized - redirecting to login");
//       // Optionally redirect to login page
//       // window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
