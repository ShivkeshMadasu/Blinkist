import React, { useState } from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styles } from './ExploreStyles';
import { Backdrop, Grid, Link, Menu, MenuItem, Box  } from '@mui/material';
import TypographyTag from '../../atoms/typography/TypographyTag';
import { AiOutlineRocket } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { BsBarChart, BsGraphUp } from "react-icons/bs";
import { FaHistory, FaGlobeAsia, FaHeart, FaLandmark } from "react-icons/fa";
import { MdOutlineScience, MdOutlineAccountBalanceWallet, MdOutlineSchool} from "react-icons/md";
import { TiShoppingBag } from "react-icons/ti";
import { RiPsychotherapyLine, RiLeafLine, RiLightbulbFlashLine, RiHeartsLine} from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import CustomButton from '../../atoms/Button/CustomButton';


function Explore() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const [drop, setDrop] = useState(true);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setDrop(false)
  };

  const closeMenu = () => {
    setAnchorElNav(null);
    setDrop(true)
  };

   const className = styles();

  return <div>
      <CustomButton variant="text" endIcon={drop ? <ExpandMoreIcon/> : <ExpandLessIcon/>} className={className.root} onClick={openMenu}>
          Explore
      </CustomButton>
      <Menu
        id="custom-menu"
        anchorEl={anchorElNav}
        keepMounted
        open={Boolean(anchorElNav)}
        onClose={closeMenu}
        className={className.menu}
      >
        <Box sx={{ ml:22, width:"940px",marginTop:"20px"}} >
            <Box sx={{display: 'flex'}}>
                <MenuItem>
                    <TypographyTag className={className.subtitle3} children="Explore by category" sx={{color: "#116BE9",paddingRight:"130px"}} />
                </MenuItem>  
                <MenuItem>
                    <TypographyTag className={className.subtitle3} children="See rececently added titles" sx={{color:"#6D787E",paddingRight:"130px"}} />
                </MenuItem>  
                <MenuItem>
                    <TypographyTag className={className.subtitle3} children="See popular titles" sx={{color:"#6D787E",paddingRight:"130px"}} />
                </MenuItem>  
            </Box>
            <Box>
                <hr style={{width:"940px"}} />
            </Box>
            <Box sx={{display: 'flex'}}>
                <Grid container direction="column" sx={{marginTop:"30px",ml:2,maxWidth:"300px"}}>
                    <Grid item>
                        <Link href="/entrepreneurship" className={className.link} underline="none" >
                            <AiOutlineRocket style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2}  children="Entrepreneurship" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" className={className.link}>
                            <MdOutlineScience style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2}  children="Science" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link  className={className.link} underline="none" >
                            <FaGlobeAsia style={{ paddingRight: "12px",  height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Economics" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <TiShoppingBag style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Corporate Culture" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <RiPsychotherapyLine style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Psychology" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <RiLeafLine style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Nature & Environment" />
                        </Link>
                    </Grid>
                </Grid>

                <Grid container direction="column" sx={{marginTop:"30px", maxWidth:"300px"}}>
                    <Grid item>
                        <Link className={className.link} underline="none" >
                            <FaLandmark style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2}  children="Politics" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" className={className.link}>
                            <FaHeart style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2}  children="Health & Nutrition" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link  className={className.link} underline="none" >
                            <FaHistory style={{ paddingRight: "12px",  height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="History" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <RiLightbulbFlashLine style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Motivation & Inspiration" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <GiSandsOfTime style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Productivity" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <FiTarget style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Career & Success" />
                        </Link>
                    </Grid>
                </Grid>

                <Grid container direction="column" sx={{marginTop:"30px", maxWidth:"300px"}}>
                    <Grid item>
                        <Link className={className.link} underline="none" >
                            <BsGraphUp style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2}  children="Marketing & Sales" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" className={className.link}>
                            <BsBarChart style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2}  children="Personal Development" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link  className={className.link} underline="none" >
                            <BiCommentDots style={{ paddingRight: "12px",  height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Communication Skills" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <MdOutlineAccountBalanceWallet style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Money & Investments" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <RiHeartsLine style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Sex & Relationship" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className={className.link} underline="none">
                            <MdOutlineSchool style={{ paddingRight: "12px", height: "22.05px", width: "16px" }} />
                            <TypographyTag className={className.body2} children="Education" />
                        </Link>
                    </Grid>
                </Grid>

            </Box>
        </Box>
      </Menu>
      <Backdrop
        sx={{ color: '#9DA3A6', zIndex: (theme) => theme.zIndex.drawer + 1, marginTop:"92px"}}
        open={Boolean(anchorElNav)}
        onClick={closeMenu}  
      >
        
      </Backdrop>
  </div>;
}

export default Explore;
