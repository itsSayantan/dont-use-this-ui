import { TextProps } from "../Text/models";

export type LinkProps = TextProps & {
  href: "string";
  target?: "string";
  rel?: "string";
};
