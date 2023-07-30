import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  color: #721c24;
  padding: 20px;
  font-size: 1.2rem;
  border-radius: 8px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #fce5cd;
  border: 1px solid #f0c38c;
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
      <ErrorIcon>🔎</ErrorIcon>
      {message}
    </ErrorContainer>
  );
};

export default ErrorComponent;
