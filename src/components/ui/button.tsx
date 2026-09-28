import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "icon";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn("tm-button", `tm-button--${variant}`, className)} {...props} />;
}