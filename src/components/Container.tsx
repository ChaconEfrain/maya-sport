import { ReactNode } from "react";

export default function Container({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div className={`max-w-[1400px] mx-auto ${className}`}>{children}</div>
  );
}
