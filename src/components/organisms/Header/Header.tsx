import { ThemeProvider } from '@emotion/react';
import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material';
import React from 'react';
import { customTheme } from '../../../theme/CustomTheme';
import Logo from '../../atoms/Logo/Logo';
import SearchIcon from '../../atoms/Search/SearchIcon';
import TypographyTag from '../../atoms/typography/TypographyTag';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from '../../atoms/Avatar/UserAvatar.stories';
import Explore from '../Explore/Explore';

function Header() {
  return <div>
      <ThemeProvider theme={customTheme}>
        <AppBar position="static" sx={{backgroundColor:"#FFFF", boxShadow:"none"}} >
            <Toolbar>
                <Box sx={{ml:20}}>
                <Logo />
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex'} }}>
                    <IconButton
                        sx={{color:"#042330", mr:4, ml:4}}
                        
                        edge="start"
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                    <IconButton sx={{mr:4, marginBottom:"4px"}}>
                        <Explore/>
                    </IconButton>
                    <Link
                        href="/"
                        sx={{ alignSelf: "center" , marginBottom:"4px"}}
                        underline="hover"
                        color=" #042330"
                    >
                        <TypographyTag  children="My Library" variant="body1" />
                    </Link>
                </Box>
                <Box sx={{ display: { xs: "flex" } }}>
                <Avatar children='S' />
                <IconButton
                    sx={{color:"#042330",mr:19,ml:0}}
                    edge="start"
                    aria-label="expand more icon"
                    >
                    <ExpandMoreIcon sx={{width:"20px", height:"20px"}} />
                </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </ThemeProvider>
  </div>;
}

export default Header;
