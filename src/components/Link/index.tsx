import React from "react";
import { LinkProps } from "./models";
import { LinkWrapper } from "./styles";

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  return <LinkWrapper {...props}>{props.children}</LinkWrapper>;
};

export default Link;
