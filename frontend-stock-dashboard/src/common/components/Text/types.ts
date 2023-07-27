import {validAsValues} from './constant';

export type TextProps = {
  as?: (typeof validAsValues)[number];
  children: React.ReactNode;
  weight?: string;
  color?: string;
  className?: string;
  fontSize?: string;
  textAlign?: "left" | "right";
};

export type BaseStyleTextProps = {
  as?: keyof JSX.IntrinsicElements;
  fontSize?: string;
  color?: string;
};
