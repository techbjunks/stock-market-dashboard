import { validAsValues } from "./constant";

export interface BaseStyleTitleProps {
  as?: (typeof validAsValues)[number];
  children: React.ReactNode;
  weight?: number;
  color?: string;
  className?: string;
  fontWeight?: number;
  textAlign?: "left" | "right";
}
