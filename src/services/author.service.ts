import { httpsClient } from "./http.client";

interface AuthorResponse {
  id: number;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export const getAuthorService = async (id: string) => {
  const response = await httpsClient.get<AuthorResponse>(`/user/${id}`);
  return response.data;
};
