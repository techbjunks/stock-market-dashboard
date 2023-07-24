import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #721c24;
  font-size: 1.2rem;
`;

const ErrorIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const DefaultErrorMessage =
  "Oops, our services are down. Our team is working on it. You can drop us an email on imteam@intuit.com";

const ErrorComponent = ({ message = DefaultErrorMessage }) => {
  return (
    <ErrorContainer>
      <ErrorIcon>😿</ErrorIcon>
      {message}
    </ErrorContainer>
  );
};

export default ErrorComponent;
