"use client";

import Image from "next/image";
import React, { useState } from "react";

interface SidebarItem {
  id: number;
  title: string;
  icons: string;
}

const data: SidebarItem[] = [
  {
    id: 1,
    title: "The Latest",
    icons: "/newspaper.png",
  },
  {
    id: 2,
    title: "FRONTEND",
    icons: "/latest.svg",
  },
  {
    id: 3,
    title: "BACKEND",
    icons: "/latest.svg",
  },
  {
    id: 4,
    title: "WEB 3",
    icons: "/latest.svg",
  },
  {
    id: 5,
    title: "TRENDS",
    icons: "/latest.svg",
  },

  // Add more items as needed
];

const Sidebar = () => {
  const [active, setActive] = useState<number | null>(null);
  const onActive = (id: number) => {
    setActive(id);
  };
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className={
            active === item.id
              ? "flex items-center gap-2 dark mb-2 rounded-md p-1 cursor-pointer bg-black text-white dark:bg-white dark:text-black"
              : "flex items-center gap-2 dark mb-2 rounded-md p-1 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          }
          onClick={() => onActive(item.id)}
        >
          <Image src={item.icons} alt={item.title} width={30} height={30} />
          <h4 className="text-lg font-semibold  ">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
