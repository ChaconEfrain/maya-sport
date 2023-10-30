import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children, id }: Props) {
  return (
    <div id={id} className={`max-w-[1400px] mx-auto px-2 ${className}`}>
      {children}
    </div>
  );
}
