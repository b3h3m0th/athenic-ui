import React, { CSSProperties, ReactChild } from "react";
import "./H1.scss";

export interface H1Props {
  children?: ReactChild;
  style?: CSSProperties;
  className?: string;
}

const H1: React.FC<H1Props> = ({ children, style, className }: H1Props) => {
  return (
    <h1 className={`h1 ${className ? className : ""}`} style={style && style}>
      {children && children}
    </h1>
  );
};

export default H1;
