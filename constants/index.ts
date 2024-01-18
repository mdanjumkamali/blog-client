import { linkItem, SidebarItem, SidebarTag } from "@/interface";

export const links: linkItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "AI",
    link: "/",
  },
  {
    id: 3,
    label: "WEB3",
    link: "/",
  },
  {
    id: 4,
    label: "REACTJS",
    link: "/",
  },
  {
    id: 5,
    label: "CLOUD",
    link: "/",
  },
];

export const Item: SidebarItem[] = [
  {
    id: 1,
    title: "The Latest",
    icons: "/newspaper.png",
  },
  {
    id: 2,
    title: "FRONTEND",
    icons: "/frontend.png",
  },
  {
    id: 3,
    title: "BACKEND",
    icons: "/backend.png",
  },
  {
    id: 4,
    title: "WEB 3",
    icons: "/network.png",
  },
  {
    id: 5,
    title: "TRENDS",
    icons: "/trends.png",
  },

  // Add more items as needed
];

export const tag: SidebarTag[] = [
  {
    tag: "#frontend",
  },
  {
    tag: "#backend",
  },
  {
    tag: "#web3",
  },
  {
    tag: "#ai",
  },
];
