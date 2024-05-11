export interface Post {
  id?: number;
  title: string;
  content: string;
  authorId: string;
  authorName?: string;
  createdAt?: string;
  updatedAt?: string;
}
