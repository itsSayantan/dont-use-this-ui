import React from "react";
import { TextProps } from "./models";
import { TextWrapper } from "./styles";

const Text: React.FC<TextProps> = (props: TextProps) => {
  return <TextWrapper {...props}>{props.children}</TextWrapper>;
};

export default Text;
