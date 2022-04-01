import React from "react";
import { ButtonProps } from "@Components/Button/models";
import { ButtonWrapper } from "@Components/Button/styles";

const Button = (props: ButtonProps) => {
  return <ButtonWrapper>{props.label}</ButtonWrapper>;
};

export default Button;
