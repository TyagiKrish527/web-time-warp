import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("tm-button", {
  variants: {
    variant: {
      default: "tm-button--primary",
      primary: "tm-button--primary",
      secondary: "tm-button--secondary",
      outline: "tm-button--secondary",
      ghost: "tm-button--ghost",
      link: "tm-button--ghost",
      destructive: "tm-button--primary",
      icon: "tm-button--icon",
    },
    size: {
      default: "",
      sm: "h-9 px-3",
      lg: "h-11 px-7",
      icon: "tm-button--icon",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";