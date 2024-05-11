"use client";

import CreateComment from "@/components/comment/CreateComment";
import { useAppDispatch, useAppSelector } from "@/redux/redux.hooks";
import { commentByIdThunk } from "@/redux/thunks/comment.thunk";
import { postByIdThunk } from "@/redux/thunks/post.thunk";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ArticleDetails = () => {
  const params = useParams();
  const postId = Array.isArray(params.id) ? params.id[0] : params.id;
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector((state) => state.post.selectedPost);
  const comments = useAppSelector((state) => state.comment.comments);
  const userId = useAppSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(postByIdThunk(postId));
    dispatch(commentByIdThunk(postId));
  }, [dispatch, postId]);

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto my-6 px-20">
      <h1 className="text-3xl font-semibold">{selectedPost.title}</h1>
      <div className="flex flex-col lg:flex-row  lg:items-center gap-1 lg:gap-2 text-green-400 text-sm">
        <span>{selectedPost.createdAt}</span>
        <span>{selectedPost.authorName || "Unknown"}</span>
      </div>
      <div className="border max-w-screen-md h-[300px] my-3"></div>
      <p>{selectedPost.content}</p>

      <div>
        <CreateComment postId={selectedPost.id!} authorId={userId} />

        {comments.map((comment, index) => (
          <div key={index} className="max-w-screen-md my-3 p-3">
            <p>{comment.text}</p>
            <div className="flex flex-col lg:flex-row  lg:items-center gap-1 lg:gap-2 text-green-400 text-sm">
              <span>{comment.createdAt}</span>
              <span>{comment.authorName || "Unknown"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetails;
