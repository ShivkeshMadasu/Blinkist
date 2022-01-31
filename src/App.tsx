
import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLibraryPage from './components/pages/MyLibraryPage/MyLibraryPage';
import EntrepreneurshipPage from './components/pages/EntrepreneurshipPage/EntrepreneurshipPage';
import BookDetailPage from './components/pages/BookDetailPage/BookDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/book" element={<BookDetailPage />}></Route>
        <Route path="/" element={<MyLibraryPage />}></Route>
        <Route path="/entrepreneurship" element={<EntrepreneurshipPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;