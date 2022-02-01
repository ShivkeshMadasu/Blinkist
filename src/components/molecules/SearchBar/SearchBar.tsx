import { Input } from '@mui/material';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { makeStyles } from "@mui/styles";

function SearchBar() {
    const useStyles = makeStyles({
        h3:{
            "&.MuiInputBase-root-MuiInput-root ":{
                color: "#6D787E", fontSize: "24px", fontWeight: 700, fontFamily: "Cera Pro"
            }
        }
    })
    
    const className = useStyles();
  return <div>
      <Input sx={{width:"800px", top:"58px", marginBottom:"50px", ml:34}} startAdornment={<FiSearch style={{ color: "#3A4649", width: "23.7px", height: "23.7px", marginRight:"25.7" }} /> }
        placeholder='Search by title or author' className={className.h3} />
  </div>;
}

export default SearchBar;
