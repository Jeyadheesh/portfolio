import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  link?: string;
  onClickFun?: () => void;
  image: string;
  name: string;
  size: string;
};

const TooltipLink = ({ link, onClickFun, image, name, size }: Props) => {
  return link ? (
    <Link
      href={link}
      target="_blank"
      className={`${size} group relative flex justify-center rounded-full transition-all`}
    >
      <Image
        alt={name}
        fill
        src={image}
        className="bg-whit  cursor-pointer   object-contain transition-all duration-100 hover:scale-110 hover:transition-all hover:duration-100 active:scale-100 active:transition-all active:duration-100"
      />
      <span className="absolute font-medium text-white opacity-0 duration-500 group-hover:-translate-y-5 group-hover:opacity-100">
        {name}
      </span>
    </Link>
  ) : (
    <button
      onClick={onClickFun}
      className={`${size} group relative flex justify-center rounded-full transition-all`}
    >
      <Image
        alt={name}
        fill
        src={image}
        className="bg-whit  cursor-pointer   object-contain transition-all duration-100 hover:scale-110 hover:transition-all hover:duration-100 active:scale-100 active:transition-all active:duration-100"
      />
      <span className="absolute font-medium text-white opacity-0 duration-500 group-hover:-translate-y-5 group-hover:opacity-100">
        {name}
      </span>
    </button>
  );
};

export default TooltipLink;
