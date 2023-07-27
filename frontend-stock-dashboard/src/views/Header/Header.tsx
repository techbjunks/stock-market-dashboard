import Search from "../Search";
import { HeaderSection } from "./styled";
import Header from "../../common/ui/Header/Header";
import ErrorBoundary from "../../common/ui/ErrorBoundary";
import Title from "../../common/components/Title/Title";

interface HeaderContainerProps {
  title: string;
}

const HeaderContainer = ({ title }: HeaderContainerProps): JSX.Element => {
  return (
    <ErrorBoundary>
      <Header>
        <HeaderSection>
          <Title as="h1" size="large">
            {title}
          </Title>
          <Search />
        </HeaderSection>
      </Header>
    </ErrorBoundary>
  );
};

export default HeaderContainer;
