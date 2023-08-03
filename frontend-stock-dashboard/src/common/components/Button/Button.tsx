import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

const Button = ({
  children,
  ariaLabel,
  type = "button",
  width,
  onClick = () => {},
  variant = "primary",
  isDisabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      type={type}
      width={width}
      role={type}
      variant={variant}
      onClick={onClick}
      aria-label={ariaLabel}
      isDisabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
