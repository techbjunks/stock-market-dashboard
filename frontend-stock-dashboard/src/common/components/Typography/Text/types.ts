import {validAsValues} from './constant';

export type TextProps = {
  as?: (typeof validAsValues)[number];
  children: React.ReactNode;
  weight?: number;
  color?: string;
  className?: string;
  textAlign?: "left" | "right";
};

export type BaseStyleTextProps = {
  as?: keyof JSX.IntrinsicElements;
  fontSize?: string;
  color?: string;
};
