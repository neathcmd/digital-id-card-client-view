import { api } from "@/lib/api";
import { User } from "@/types/use";

export async function getUserProfile(): Promise<User> {
  const response = await api.get("/user/profile");
  return response.data;
}
