import { Button } from '@mui/material';
import React, { ReactNode } from 'react';
import TypographyTag from '../typography/TypographyTag';

type buttonProps={
    variant: "contained" | "text" | "outlined"
    className?:string,
    startIcon?:ReactNode,
    endIcon?:ReactNode,
    children:string,
    onClick?:React.MouseEventHandler<HTMLElement>
}

function CustomButton(props:buttonProps) {
   

  return <div>
      <Button variant={props.variant} startIcon={props.startIcon} fullWidth= {true} sx={{color:"#0365F2"}} 
            onClick={props.onClick} className={props.className} endIcon={props.endIcon} >
          <TypographyTag variant="body1" children={props.children} />
      </Button>
  </div>;
}

export default CustomButton;