import { Signup, Login } from "@/interfaces/auth.interface";
import { UserState } from "../slices/user.slice";

interface AuthResponse extends UserState {
  token: string;
  isAuthenticated: boolean;
}

export const signupService = async (input: Signup): Promise<AuthResponse> => {
  return {
    name: "anjum kamali",
    email: "anjum@email.com",
    token: "sddsd",
    isAuthenticated: true,
  };
};

export const loginService = async (input: Login): Promise<AuthResponse> => {
  return {
    name: "anjum",
    email: "anjum@email.com",
    token: "sddsd",
    isAuthenticated: true,
  };
};
