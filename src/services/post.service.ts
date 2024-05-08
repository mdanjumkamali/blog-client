import { Post } from "@/interfaces/post.interface";
import { httpsClient } from "./http.client";

export const createPostService = async (input: Post): Promise<Post> => {
  const response = await httpsClient.post<Post>("/post/create-post", input);
  return response.data;
};

export const getPostService = async (): Promise<Post[]> => {
  const response = await httpsClient.get<Post[]>("post/all-posts");
  return response.data;
};
