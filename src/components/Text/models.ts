import { Colors } from "../../common/colors";
import { ReactNode } from "react";

export enum TextSizes {
  sm,
  m,
  lg,
  xl,
  xxl,
}

export type TextProps = {
  children: ReactNode;
  size: TextSizes;
  color: Colors;
  ellipsis: boolean;
  weight?: string;
  italic?: boolean;
  underline?: boolean;
  overline?: boolean;
  lineThrough?: boolean;
};
