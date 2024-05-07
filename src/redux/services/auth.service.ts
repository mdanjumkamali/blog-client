import { Login, Signup } from "@/interfaces/auth.interface";
import { httpsClient } from "./http.client";

interface AuthResponse {
  id: number;
  name: string;
  email: string;
  accessToken: string;
}

export const signupService = async (input: Signup): Promise<AuthResponse> => {
  const response = await httpsClient.post<AuthResponse>("/auth/signup", input);
  return response.data;
};

export const loginService = async (input: Login): Promise<AuthResponse> => {
  const response = await httpsClient.post<AuthResponse>("/auth/login", input);
  return response.data;
};
