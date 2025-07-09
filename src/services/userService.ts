import { api } from "@/lib/api/api";
import { User } from "@/types/user";

export async function getUserProfile(): Promise<User> {
  const response = await api.get("/user/profile");
  return response.data;
}
