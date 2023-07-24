import Search from "../Search";
import { HeaderSection } from "./styled";
import Header from "../../common/ui/Header/Header";
import Title from "../../common/components/Typography/Title/Title";

interface HeaderContainerProps {
  title: string,
}

const HeaderContainer = ({ title }:HeaderContainerProps): JSX.Element => {
  return (
    <Header>
      <HeaderSection>
        <Title as="h1" size="large">
          {title}
        </Title>
        <Search />
      </HeaderSection>
    </Header>
  );
};

export default HeaderContainer;
