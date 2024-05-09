"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PostCardProps {
  id?: number;
  title: string;
  content: string;
  createdAt?: string;
  authorName: string;
}

const PostCard = ({
  id,
  title,
  content,
  createdAt,
  authorName,
}: PostCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-10 p-3">
      <div className="border w-full lg:w-2/5 h-[200px]">
        <Image
          src="/img.jpeg"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 ">
            <span className="text-2xl font-md">{title}</span>
            <span className="text-xs font-bold text-green-500">
              {createdAt} : {authorName || "Unknown"}
            </span>
          </div>

          <span>
            {content.length > 100 ? `${content.slice(0, 100)}...` : content}
          </span>
        </div>
        <Link href={`/article/${id}`}>
          <Button className="mt-4">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
