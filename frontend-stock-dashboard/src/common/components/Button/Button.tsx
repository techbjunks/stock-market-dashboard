import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

const Button = ({
  children,
  ariaLabel,
  type = "button",
  width,
  onClick = () => {},
  variant = "primary",
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      type={type}
      width={width}
      variant={variant}
      onClick={onClick}
      aria-label={ariaLabel}
      role={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
