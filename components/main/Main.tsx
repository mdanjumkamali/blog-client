"use client";
import React from "react";
import { BigCard } from "../card/BigCard";
import { blogPosts } from "@/data";

const Main = () => {
  const lastIndex = blogPosts.length - 1;

  return (
    <div className="w-[80%]">
      {blogPosts
        .filter((post, index) => index === lastIndex)
        .map((post) => (
          <BigCard
            key={post.title}
            title={post.title}
            description={post.content}
            imgUrl={post.imageUrl}
            author={post.author}
            date={post.date}
          />
        ))}
    </div>
  );
};

export default Main;
