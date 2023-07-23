import { ButtonProps } from "./types";

const Button = ({ children, onClick, ariaLabel }: ButtonProps): JSX.Element => {
  return <button aria-label={ariaLabel} onClick={onClick}>{children}</button>;
};

export default Button;
