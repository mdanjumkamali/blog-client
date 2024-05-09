"use client";

import { useAppDispatch, useAppSelector } from "@/redux/redux.hooks";
import { fetchAuthorThunk } from "@/redux/thunks/author.thunk";
import { postByIdThunk } from "@/redux/thunks/post.thunk";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ArticleDetails = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const authorName = useAppSelector((state) => state.author.name); // Get author name
  const selectedPost = useAppSelector((state) => state.post.selectedPost); // Use selectedPost

  useEffect(() => {
    dispatch(postByIdThunk(params.id));
  }, []);

  useEffect(() => {
    if (selectedPost) {
      const authorId = selectedPost.authorId;
      if (authorId) {
        dispatch(fetchAuthorThunk(authorId));
      }
    }
  }, []);

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
    </div>
  );
};

export default ArticleDetails;
