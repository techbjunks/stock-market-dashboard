import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

const Button = ({
  type,
  onClick,
  children,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton aria-label={ariaLabel} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
