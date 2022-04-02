import React from "react";
import { LinkProps } from "@Components/Link/models";
import { LinkWrapper } from "@Components/Link/styles";

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  return <LinkWrapper {...props}>{props.children}</LinkWrapper>;
};

export default Link;
