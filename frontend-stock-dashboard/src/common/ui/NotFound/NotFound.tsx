import React from "react";
import { NotFoundContainer, NotFoundText, NotFoundEmoji } from "./styled";

const NotFound: React.FC = (): JSX.Element => {
  return (
    <NotFoundContainer>
      <NotFoundText>Oops! Page not found</NotFoundText>
      <NotFoundEmoji>😿</NotFoundEmoji>
    </NotFoundContainer>
  );
};

export default NotFound;
