import { comment } from "@/interfaces/comment.interface";
import { httpsClient } from "./http.client";

interface Comment {
  text: string;
  postId: string;
}

export const fetchCommentsService = async (id: string): Promise<comment> => {
  const response = await httpsClient.get<comment>(`/comment/${id}`);
  return response.data;
};

export const createCommentService = async (
  comment: comment,
  postId: string | number
): Promise<comment> => {
  const response = await httpsClient.post<comment>(
    `/comment/${postId}`,
    comment
  );
  return response.data;
};
