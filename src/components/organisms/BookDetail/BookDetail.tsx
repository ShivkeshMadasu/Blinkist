import { Box, Button, Tab } from '@mui/material';
import React, {useState, useEffect} from 'react';
import TypographyTag from '../../atoms/typography/TypographyTag';
import { useStyles } from './BookDetailStyle';
import { useLocation, useNavigate  } from "react-router-dom";
import axios from "axios";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TabContext, TabList, TabPanel } from '@mui/lab';

interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    readingTime: string;
    userCount: string;
    progress?: number;
    status: string;
    category:string;
  }
    

function BookDetail() {

    const className = useStyles();
    const [value, setValue] = React.useState("Synopsis");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id");
    const [book, setBook] = useState<Book>(Object);
    useEffect(() => {
    async function bookData() {
        await axios.get("http://localhost:8080/books/" + id).then((res) => {
        setBook(res.data);
        });
    }
    bookData();
    }, [id]);
    const handleClick = async ()=>{
    await axios.put("http://localhost:8080/books/"+id,{
        id:book.id,
        title: book.title,
        author: book.author,
        image: book.image,
        readingTime: book.readingTime,
        userCount: book.userCount,
        progress: 100,
        status: "finished",
        category: book.category
    })
    navigate("/");
    }
  return <Box sx={{ml:24, width:"1340px", marginTop:"90px", marginBottom:"260px"}}>
      <Box>
          <TypographyTag variant="body2" children="Get the key ideas from" />
      </Box>
      <Box display="flex" marginTop="40px">
          <Box>
            <TypographyTag variant="h1" children={book.title} />

            <TypographyTag className={className.subtitle} sx={{ marginTop: "24px" }}
                children="Turning Your Business into an Enduring Great Company" />

            <TypographyTag className={className.body1} sx={{ marginTop: "24px" }}
                children={`By ${book.author}`} />

            <TypographyTag sx={{display:"flex", marginTop:"18px"}}>
                <AccessTimeIcon sx={{ width: "20px", height: "20px", color: "#6D787E", marginRight: "10px", }} />
                <TypographyTag variant="caption" children="15-minute read" sx={{ marginTop: "1px" }} />
            </TypographyTag>
            <Box sx={{ display: { md: "flex" }, marginTop: "83px" }}>
                <Button variant="outlined" sx={{ marginRight: "31.5px", color: "#22C870" }} >
                    Read now
                </Button>

                <Button variant="contained" onClick={handleClick}
                    sx={{ marginTop: { xs: "10px", sm: "0px" },
                          backgroundColor: "#2CE080",
                          color: "#03314B",
                          "&.MuiButton-root:hover": {
                          backgroundColor: "#2CE080",
                          color: "white",
                          },
                    }} >
                    Finished Reading
                </Button>

                <Button variant="text" endIcon={<ArrowForwardIcon />}
                    sx={{
                        marginLeft: { sm: "31.5px" },
                        marginTop: { xs: "10px", sm: "0px" },
                        color: "#6D787E",
                    }} >
                    Send to Kindle
                </Button>
            </Box>
            
            <Box sx={{ marginTop: "60px", width:"600px" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" className={className.style} variant="fullWidth">
                            <Tab label="Synopsis" value="Synopsis" />
                            <Tab label="Who is it for?" value="Who is it for?" />
                            <Tab label="About the author" value="About the author" />
                        </TabList>
                    </Box>
                    <TabPanel value="Synopsis" className={className.body1}>Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
                    </TabPanel>
                    <TabPanel value="Who is it for?" className={className.body1}>Turning Your Business into an Enduring Great Company</TabPanel>
                    <TabPanel value="About the author" className={className.body1}>By Jim Collins and Bill Lazier</TabPanel>
                </TabContext>
            </Box>

          </Box>
          <Box sx={{ alignItems: "center", marginLeft: { md: "125px" } }}>
            <img src={process.env.PUBLIC_URL + book.image} alt={book.title} />
          </Box>
      </Box>
      
  </Box>
}

export default BookDetail;
