import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "../../atoms/typography/TypographyTag";
import Tab from "../../organisms/Tab/CustomTabs"; 
import Card from "../../molecules/BookCard/BookCard";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

interface Book{
    id: number;
    title: string;
    author: string;
    image: string;
    readingTime: string;
    userCount: string;
    progress?: number;
    status: string;
    category: string;
  }
  const MyLibrary = () => {
    const useStyles = makeStyles({
      title: {
        marginBottom: "60px",
        marginTop: "89px"       
      },
    });
    const className = useStyles();
    const navigate = useNavigate();
    const [currentReadingBooks, setCurrentReadingBooks] = useState<Book[]>([]);
    const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);
    const [currentState, setCurrentState] = useState("currently reading");
    useEffect(() => {
      const fetchBooks = async () => {
        let response = await fetch("http://localhost:8080/books");
        let result = await response.json();
        setCurrentReadingBooks(
          result.filter((book: Book) => book.status === "currently reading")
        );
        setFinishedBooks(result.filter((book: Book) => book.status === "finished"));
      };
      fetchBooks();
    },[]);
    const handleState = (state: string) => {
      setCurrentState(state);
    };
  
    const cards = (books: Book[]) => {
      return books.map((book: Book,index) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index} >
            <Card
              key={book.id}
              title={book.title}
              author={book.author}
              image={book.image}
              readingTime={book.readingTime}
              userCount={book.userCount}
              status={book.status}
              progress={book.progress}
              category={book.category}
              onClick={() => {
                navigate("/book");
              }}
            />
          </Grid>
        );
      });
    };
    return (
      <div>
        <div className={className.title}>
          <Typography variant="h1" children="My Library" sx={{ml:24}} />
        </div>
        <TabContext value={currentState}>
          <Tab stateHandler={handleState} />
            <TabPanel value="currently reading" sx={{ml:21}}>
              <Grid container rowSpacing={3} >
                {cards(currentReadingBooks)}
              </Grid>
            </TabPanel>
            <TabPanel value="finished" sx={{ml:21}}>
              <Grid container rowSpacing={3} >
                {cards(finishedBooks)}
              </Grid>
            </TabPanel>
        </TabContext>
      </div>
    );
  };
  
  export default MyLibrary;