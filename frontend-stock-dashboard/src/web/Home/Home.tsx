import Search from "./Search";
import { HeaderSection } from "./styled";
import Header from "../../common/ui/Header/Header";
import Title from "../../common/components/Typography/Title/Title";

const Home = (): JSX.Element => {
  return (
    <Header>
      <HeaderSection>
        <Title as='h1' size="large">Stock Market Exchange</Title>
        <Search />
      </HeaderSection>
    </Header>
  );
};

export default Home;
