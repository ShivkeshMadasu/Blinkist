import React from 'react';
import { FiSearch } from "react-icons/fi";;

type searchProps={}

function SearchIcon(props:searchProps) {
  return <div>
      <FiSearch style={{width:"20px", height:"20px"}}/>
  </div>;
}

export default SearchIcon;
