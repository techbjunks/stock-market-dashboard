import { useState } from "react";
import styled from 'styled-components';
import TextInput from "../../../common/components/Input/TextInput/TextInput";

const Container = styled.div`
  height: 100px;
`;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <TextInput
        autoFocus
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Container>
  );
};

export default Search;
