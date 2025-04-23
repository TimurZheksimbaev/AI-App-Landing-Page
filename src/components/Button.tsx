import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  px?: string;
  white?: boolean;
}

export const Button = (props: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    props.px || "px-7" } ${props.white ? "text-n-8" : "text-n-1"} ${props.className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={props.onClick}>
      <span className={spanClasses}>{props.children}</span>
      {ButtonSvg(props.white ?? false)}
    </button>
  );

  const renderLink = () => (
    <a href={props.href} className={classes}>
      <span className={spanClasses}>{props.children}</span>
      {ButtonSvg(props.white ?? false)}
    </a>
  );

  return props.href ? renderLink() : renderButton();
};
