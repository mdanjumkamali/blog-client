"use client";
import React from "react";
import { BigCard } from "../card/BigCard";
import { blogPosts } from "@/data";
import SmallCard from "../card/SmallCard";

const Main = () => {
  const lastIndex = blogPosts.length - 1;

  return (
    <div className="w-[80%] mt-8">
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

      <div className="flex flex-wrap justify-between">
        {blogPosts.map((post) => (
          <SmallCard
            key={post.title}
            title={post.title}
            description={post.content}
            imgUrl={post.imageUrl}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
