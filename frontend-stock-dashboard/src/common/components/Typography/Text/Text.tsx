import { BaseStyleText } from "./styled";
import { TextProps } from "./types";

const Text = ({
  color,
  weight,
  children,
  textAlign,
  className,
}: TextProps): JSX.Element => {
  return (
    <BaseStyleText
      color={color}
      weight={weight}
      textAlign={textAlign}
      className={className}
    >
      {children}
    </BaseStyleText>
  );
};

export default Text;
