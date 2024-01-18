export interface linkItem {
  id: number;
  label: string;
  link: string;
}

export interface SidebarItem {
  id: number;
  title: string;
  icons: string;
}

export interface SidebarTag {
  tag: string;
}

export interface BigCardProp {
  title: string;
  description: string;
  author: string;
  imgUrl: string;
  date: string;
}
