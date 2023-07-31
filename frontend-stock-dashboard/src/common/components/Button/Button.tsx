import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

const Button = ({
  children,
  ariaLabel,
  type = "button",
  onClick = () => {},
  variant = "primary",
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
