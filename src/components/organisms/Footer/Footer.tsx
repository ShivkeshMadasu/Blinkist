import { Box } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import TypographyTag from '../../atoms/typography/TypographyTag';

function Footer() {
    const useStyles = makeStyles({
        subtitle1: {
          "&.MuiTypography-subtitle1":{
            fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "32px",
            color: "#0365F2"
          }
        },
        body1: {
          "&.MuiTypography-body1":{
            fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#03314B"
          }
        },
        body2: {
            "&.MuiTypography-body2":{
              fontFamily: "Cera Pro",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#6D787E"
            }
        },
        caption: {
            "&.MuiTypography-body2":{
              fontFamily: "Cera Pro",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "22px",
              color: "#6D787E",
            }
          },
    });


    const editorial :string[] = ["Book List","What is Nonfiction?","What to read next?","Benefits of reading"];
    const usefulLinks :string[] = ["Pricing","Blinkist business","Gift cards","Blinkist magaine","Contact & help"];
    const company :string[] = ["About","Careers","partners","Code of Conduct"];

    const style = useStyles();
  return <div>
      <Box sx={{ backgroundColor:"#F1F6F4", width:"100%" }}>
        <Box  sx={{ display:{ sm:"block", md:"flex" }, paddingTop:"38px" }} >
            <Box sx={{  width: "378px", ml:34 }} >
                <Box>
                <Logo />
                </Box>
                <TypographyTag sx={{ marginTop: "32px"}} variant="subtitle1" className={style.subtitle1} >
                    Big ideas in small packages
                </TypographyTag>
                <TypographyTag variant="subtitle1" className={style.subtitle1} >
                    Start learning now
                </TypographyTag>
            </Box>
            <Box sx={{display: {sm:"flex"}}}>
                <Box sx={{width:"214px"}} >
                    <TypographyTag variant='body1' className={style.body1} > Editorial </TypographyTag>
                    {editorial.map((item,index) => (
                        <TypographyTag sx={{ marginTop: "16px"}} variant='body2' className={style.body2} key={index} >{item}</TypographyTag>
                    ))}
                </Box>
                <Box sx={{width:"214px"}} >
                    <TypographyTag variant='body1' className={style.body1} > Useful links </TypographyTag>
                    {usefulLinks.map((item,index) => (
                        <TypographyTag sx={{ marginTop: "16px"}} variant='body2' className={style.body2} key={index} >{item}</TypographyTag>
                    ))}
                </Box>
                <Box sx={{width:"214px"}} >
                    <TypographyTag variant='body1' className={style.body1} > Company </TypographyTag>
                    {company.map((item,index) => (
                        <TypographyTag sx={{ marginTop: "16px"}} variant='body2' className={style.body2} key={index} >{item}</TypographyTag>
                    ))}
                </Box>
            </Box>
        </Box>
        <Box sx={{ padding:"38px 0px", width:"546px", height:"22px", ml:34 }} >
          <TypographyTag variant="caption" className={style.caption} >
          © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
          </TypographyTag>
        </Box>
     </Box>
  </div>;
}

export default Footer;

