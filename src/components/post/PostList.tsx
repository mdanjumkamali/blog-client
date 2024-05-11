"use client";
import React from "react";
import { useAppSelector } from "@/redux/redux.hooks";
import { useEffect } from "react";
import { fetchPostsThunk } from "@/redux/thunks/post.thunk";
import { useAppDispatch } from "@/redux/redux.hooks";
import PostCard from "./PostCard";

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.post.posts);
  const loading = useAppSelector((state) => state.post.loading);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts) {
    return <div>No posts found</div>;
  }
  return (
    <div className="max-w-screen-lg mx-auto">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          id={post.id}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
          authorName={post.authorName!} // Get author name
        />
      ))}
    </div>
  );
};

export default PostList;
