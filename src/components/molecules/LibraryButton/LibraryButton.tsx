import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from "@mui/styles";
import React from 'react';
import TypographyTag from '../../atoms/typography/TypographyTag';

type buttonProps={
    variant: "contained" | "text" | "outlined"
    className?:string,
}

function LibraryButton(props:buttonProps) {
    const buttonStyle = makeStyles({
        root:{
            "&.MuiButton-root":{
            height : "60px",
            border: "1px solid #E1ECFC",
            boxSizing: "border-box",
            borderRadius: "0px 0px 8px 8px",
            padding: "14px 24px"
            }
        }

    });
    const className = buttonStyle();

  return <div>
      <Button variant={props.variant} startIcon={<AddIcon />} fullWidth= {true} sx={{color:"#0365F2"}} className={className.root} >
          <TypographyTag variant="body1" children="Add to library" />
      </Button>
  </div>;
}

export default LibraryButton;
