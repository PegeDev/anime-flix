"use client";
import clsx from "clsx";
import Image from "next/image";

interface imageProps {
  className?: string;
  alt: string;
  priority?: boolean;
  id?: number;
  src: string;
  style?: React.CSSProperties;
}

export default function ImageLoader({
  className,
  alt,
  priority,
  id,
  src,
  style,
}: imageProps) {
  return (
    <Image
      src={src}
      style={{ ...style }}
      alt={alt}
      fill
      sizes="100%"
      priority={priority}
      onLoadingComplete={(img) => {
        img.classList.replace("blur-2xl", "blur-0");
        img.classList.replace("opacity-0", "opacity-100");
      }}
      className={clsx(
        `object-cover w-full h-full  blur-2xl opacity-0 bg-slate-300 ease-linear transition-all`,
        className
      )}
    />
  );
}
