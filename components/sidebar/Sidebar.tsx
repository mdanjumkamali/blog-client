"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Item as data, tag } from "@/constants";

const Sidebar = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div>
      {/* title */}
      <div className="border-b-2 pb-6  border-black dark:border-white">
        {data.map((item) => (
          <div
            key={item.id}
            className={
              active === item.id
                ? "flex items-center gap-2 dark mb-2 rounded-md p-1 cursor-pointer bg-[#F2F1EB] text-black dark:bg-white dark:text-black"
                : "flex items-center gap-2 dark mb-2 rounded-md p-1 cursor-pointer hover:bg-[#F2F1EB] hover:text-black dark:hover:bg-[#F2F1EB] dark:hover:text-black"
            }
            onClick={() => setActive(item.id)}
          >
            <Image src={item.icons} alt={item.title} width={30} height={30} />
            <h4 className="text-lg font-semibold  ">{item.title}</h4>
          </div>
        ))}
      </div>

      {/* tags */}
      <div>
        {tag.map((item, index) => (
          <li key={index} className="list-none mt-4 cursor-pointer">
            {item.tag}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
