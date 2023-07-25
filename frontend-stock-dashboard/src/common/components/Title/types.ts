import { validAsValues } from "./constant";

export interface BaseStyleTitleProps {
  as?: (typeof validAsValues)[number];
  children: React.ReactNode;
  weight?: number;
  color?: string;
  className?: string;
  size?: "large" | "medium" | "small",
  fontWeight?: number;
  textAlign?: "left" | "right";
}
