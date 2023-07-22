import { useState } from "react";
import TextInput from "../../../common/components/Input/TextInput/TextInput";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <TextInput autoFocus value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    )
};

export default Search;