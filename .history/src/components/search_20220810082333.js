import React from "react";
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchUsers }) => {
    return (
<div  className="search">
<MdSearch className="search-icons" size='1.3em' />
<input onChange={(event) =. }  type='text' placeholder="type to search..." />
</div>
    )
};

export default Search;