import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";
import Article from "./pages/ArticlePage/ArticlePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SearchPage />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
