import { TextProps } from "@Components/Text/models";

export type LinkProps = TextProps & {
  href: "string";
  target?: "string";
  rel?: "string";
};
