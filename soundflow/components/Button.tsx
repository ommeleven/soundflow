import React, { forwardRef, ButtonHTMLAttributes } from "react";
// import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        className={clsx(
          "w-full",
          "rounded-full",
          "bg-green-500",
          "text-black",
          "border",
          "border-transparent",
          "px-3",
          "py-3",
          "disabled:opacity-50",
          "disabled:cursor-not-allowed",
          "font-bold",
          "hover:opacity-75",
          "transition",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
