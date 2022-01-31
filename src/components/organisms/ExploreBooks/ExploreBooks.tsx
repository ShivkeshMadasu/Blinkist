import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import TypographyTag from "../../atoms/typography/TypographyTag"; 
import Card from "../../molecules/BookCard/BookCard";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

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

function ExploreBooks() {
  const [trendingBooks, setTrendingBooks] = useState<Book[]>([]);
  const [justAddedBooks, setJustAddedBooks] = useState<Book[]>([]);
  const [audioBooks, setAudioBooks] = useState<Book[]>([]);
  useEffect(() => {
    async function fetchBooks() {
      await axios.get("http://localhost:8080/books").then((res) => {
        const data = res.data;
        setTrendingBooks(
          data.filter((book: Book) => book.category === "trending blinks")
        );
        setJustAddedBooks(
          data.filter((book: Book) => book.category === "just added")
        );
        setAudioBooks(
          data.filter((book: Book) => book.category === "featured audio blinks")
        );
      });
    }
    fetchBooks();
  }, []);
  const navigate = useNavigate();
  const cards = (books: Book[]) => {
    return books.map((book: Book, index) => {
      return (
        <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
          <Card
            key={book.id}
            readingTime={book.readingTime}
            userCount={book.userCount}
            status={book.status}
            progress={book.progress}
            title={book.title}
            author={book.author}
            image={book.image}
            category={book.category}
            onClick={() => {
              navigate("/book?id=" + book.id);
              window.scrollTo(0, 0);
            }}
          />
        </Grid>
      );
    });
  };
  return (
    <Box sx={{ml:24, width:"1340px"}}>
      <TypographyTag
        sx={{ marginTop: "80px", marginBottom: "25px",fontSize:"24px" }}
        variant="h3"
        children="Trending blinks"
      />
      <Grid container rowSpacing={3}>
        {cards(trendingBooks)}
      </Grid>
      <TypographyTag
        sx={{ marginTop: "80px", marginBottom: "25px",fontSize:"24px" }}
        variant="h3"
        children="Just Added"
      />
      <Grid container rowSpacing={3}>
        {cards(justAddedBooks)}
      </Grid>
      <TypographyTag
        sx={{ marginTop: "80px", marginBottom: "25px",fontSize:"24px" }}
        variant="h3"
        children="Featured audio blinks"
      />
      <Grid container rowSpacing={3} sx={{ marginBottom: "76px" }}>
        {cards(audioBooks)}
      </Grid>
    </Box>
  );
}


export default ExploreBooks;
