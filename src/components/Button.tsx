import clsx from "clsx";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type buttonSize = "regular" | "large" | "small";
type buttonVariant = "regular" | "outline" | "ghost";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: buttonSize;
  variant?: buttonVariant;
  children: ReactNode;
}

export default function Button({
  size = "regular",
  variant = "regular",
  children,
  className,
  ...props
}: Props) {
  const _size = {
    large: "px-5 py-3 text-lg",
    small: "px-2 py-1 text-sm",
    regular: "px-4 py-2 text-base",
  };
  const _variant = {
    regular: "bg-secondary text-white",
    outline: "bg-tranparent border-2 text-white border-secondary",
    ghost: "bg-white/20 text-white",
  };
  return (
    <button
      className={clsx(
        "h-fit w-fit rounded-lg text-base font-semibold  flex items-center",
        "disabled:cursor-not-allowed disabled:opacity-50",
        _size[size],
        _variant[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
