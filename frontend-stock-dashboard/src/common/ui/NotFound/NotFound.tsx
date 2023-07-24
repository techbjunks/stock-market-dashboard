import React from "react";
import { NotFoundContainer, NotFoundText, NotFoundEmoji } from "./styled";

interface NotFoundProps {
  message?: string,
}

const NotFound: React.FC = ({ message }: NotFoundProps): JSX.Element => {
  return (
    <NotFoundContainer>
      <NotFoundText>{message ?? 'Oops! Page not found'}</NotFoundText>
      <NotFoundEmoji>😿</NotFoundEmoji>
    </NotFoundContainer>
  );
};

export default NotFound;
