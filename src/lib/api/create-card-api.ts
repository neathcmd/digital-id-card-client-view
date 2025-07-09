// import axios from "axios";
// import { CreateCardPayload, CreateCardResponse } from "@/types/card-type";

// export const createCard = async (
//   payload: CreateCardPayload
// ): Promise<CreateCardResponse> => {
//   try {
//     const response = await axios.post("/api/v1/card/create-card", payload);
//     return response.data;
//   } catch (error: any) {
//     console.error("Create card API error:", error);
//     throw error;
//   }
// };

// import { CardFormData } from "@/types/form-type";

// export const createCard = async (data: CardFormData) => {
//   const response = await fetch("/api/cards", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create card");
//   }

//   return response.json();
// };

// import axiosInstance from "../axios-instance";
// import { CardFormData } from "@/types/form-type";

// export const createCard = async (data: CardFormData) => {
//   const response = await axiosInstance.post("/cards", data);
//   return response.data;
// };
