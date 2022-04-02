import colors from "@Common/colors";
import styled from "styled-components";
import { TextSizes, TextProps } from "./models";

export const TextWrapper = styled.div<TextProps>`
  font-size: ${(props: TextProps) => {
    switch (props.size) {
      case TextSizes.sm:
        return "0.8rem";
      case TextSizes.m:
        return "1rem";
      case TextSizes.lg:
        return "1.2rem";
      case TextSizes.xl:
        return "7rem";
      case TextSizes.xxl:
        return "12rem";
      default:
        return "1rem";
    }
  }};
  color: ${(props: TextProps) => colors[props.color]};
  line-height: 1.2;
  font-weight: ${(props: TextProps) => (props.weight ? props.weight : "400")};
  overflow: ${(props: TextProps) => (props.ellipsis ? "hidden" : "unset")};
  white-space: ${(props: TextProps) => (props.ellipsis ? "nowrap" : "normal")};
  text-overflow: ${(props: TextProps) =>
    props.ellipsis ? "ellipsis" : "unset"};
  font-style: ${(props: TextProps) => (props.italic ? "italic" : "")};
  text-decoration: ${(props: TextProps) => {
    let textDecoration: Array<string> = [];
    if (props.underline) textDecoration.push("underline");
    if (props.overline) textDecoration.push("overline");
    if (props.lineThrough) textDecoration.push("line-through");
    return textDecoration.join(" ");
  }};
`;
