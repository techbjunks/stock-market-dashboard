import { useState } from "react";
import { Container, InputStyle } from "./styled";
import TextInput from "../../../common/components/Input/TextInput/TextInput";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <TextInput
        autoFocus
        style={InputStyle}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Container>
  );
};

export default Search;
