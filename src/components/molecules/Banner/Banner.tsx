import { Box } from '@mui/material';
import React from 'react';
import TypographyTag from '../../atoms/typography/TypographyTag';
import banner from '../../../assets/Reading.png' 

function Banner() {
  return <div>
      <Box sx={{width:"1000px", height:"264px", ml:34, marginTop:"32px", background:"#F1F6F4", display: { sm: "block", md: "flex" }, alignItems: "center" }} >
        <Box >
            <Box sx={{ padding: "45px 0px 0px 45px"}} >
                <TypographyTag variant="h1" >
                    Explore Books on
                </TypographyTag>
                <TypographyTag variant="h1" >
                    entrepreneurship
                </TypographyTag>
            </Box>
            <Box sx={{ padding: "15px 0px 45px 45px"}} >
                <TypographyTag variant="subtitle2" >
                    Everything you need to know about thriving on a
                </TypographyTag>
                <TypographyTag variant="subtitle2" >
                    shoestring budget, making your first million, and hiring
                </TypographyTag>
                <TypographyTag variant="subtitle2" >
                    right from the start.
                </TypographyTag>
            </Box>
        </Box>
        <Box sx={{ padding: "45px 0px 30px 120px"}} >
            <img src={banner} alt="banner" />
        </Box>
      </Box>
  </div>;
}

export default Banner;
