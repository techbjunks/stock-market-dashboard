import { BaseStyleTitle } from "./styled";
import { BaseStyleTitleProps } from "./types";

const Title = ({
  as,
  color,
  size,
  weight,
  children,
  textAlign,
  className,
  fontWeight,
}: BaseStyleTitleProps): JSX.Element => {
  return (
    <BaseStyleTitle
      as={as}
      size={size}
      color={color}
      weight={weight}
      textAlign={textAlign}
      className={className}
      fontWeight={fontWeight}
    >
      {children}
    </BaseStyleTitle>
  );
};

export default Title;
