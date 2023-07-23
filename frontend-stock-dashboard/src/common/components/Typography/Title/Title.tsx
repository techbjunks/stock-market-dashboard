import { BaseStyleTitle } from "./styled";
import { BaseStyleTitleProps } from "./types";

const Title = ({
  as,
  color,
  weight,
  children,
  textAlign,
  className,
  fontWeight,
}: BaseStyleTitleProps): JSX.Element => {
  return (
    <BaseStyleTitle
      as={as}
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
