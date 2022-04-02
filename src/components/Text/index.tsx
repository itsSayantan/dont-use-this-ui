import React from "react";
import { TextProps } from "@Components/Text/models";
import { TextWrapper } from "@Components/Text/styles";

const Text: React.FC<TextProps> = (props: TextProps) => {
  return <TextWrapper {...props}>{props.children}</TextWrapper>;
};

export default Text;
