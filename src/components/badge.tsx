import type { ComponentProps } from "react";

export default function Badge({ children, ...props }: ComponentProps<"span">) {
  return (
    <span
      {...props}
      className="flex items-center rounded-full bg-(--muted-background) px-3 py-1 text-xs leading-5 font-medium text-(--foreground)"
    >
      {children}
    </span>
  );
}
