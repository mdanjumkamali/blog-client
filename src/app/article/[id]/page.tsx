"use client";

import CreateComment from "@/components/comment/CreateComment";
import { useAppDispatch, useAppSelector } from "@/redux/redux.hooks";
import { fetchAuthorThunk } from "@/redux/thunks/author.thunk";
import { commentByIdThunk } from "@/redux/thunks/comment.thunk";
import { postByIdThunk } from "@/redux/thunks/post.thunk";
import { useParams } from "next/navigation";
import { use, useEffect } from "react";

const ArticleDetails = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const authorName = useAppSelector((state) => state.author.name); // Get author name
  const selectedPost = useAppSelector((state) => state.post.selectedPost);
  const comments = useAppSelector((state) => state.comment.comments);

  useEffect(() => {
    dispatch(postByIdThunk(params.id));
    dispatch(commentByIdThunk(params.id));
  }, []);

  useEffect(() => {
    if (selectedPost) {
      const authorId = selectedPost.authorId;
      if (authorId) {
        dispatch(fetchAuthorThunk(authorId));
      }
    }
  }, [selectedPost]);

  useEffect(() => {
    if (comments) {
      comments.forEach((comment) => {
        dispatch(fetchAuthorThunk(comment.authorId));
      });
    }
  }, [comments]);

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto my-6 px-20">
      <h1 className="text-3xl font-semibold">{selectedPost.title}</h1>
      <div className="flex flex-col lg:flex-row  lg:items-center gap-1 lg:gap-2 text-green-400 text-sm">
        <span>{selectedPost.createdAt}</span>
        <span>{authorName || "Unknown"}</span>
      </div>
      <div className="border max-w-screen-md h-[300px] my-3"></div>
      <p>{selectedPost.content}</p>

      <div>
        <CreateComment postId={selectedPost.id} />

        {comments.map((comment, index) => (
          <div key={index} className="max-w-screen-md my-3 p-3">
            <p>{comment.text}</p>
            <div className="flex flex-col lg:flex-row  lg:items-center gap-1 lg:gap-2 text-green-400 text-sm">
              <span>{comment.createdAt}</span>
              <span>{authorName || "Unknown"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetails;
