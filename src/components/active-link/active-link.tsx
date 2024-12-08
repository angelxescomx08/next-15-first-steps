'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./active-link.module.css";

type Props = {
  path: string;
  text: string;
};

export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname();

  return (
    <Link 
      key={path} 
      className={`mr-2 ${style.link} ${pathName === path ? style['active-link'] : ""}`} 
      href={path}>
      {text}
    </Link>
  );
};
