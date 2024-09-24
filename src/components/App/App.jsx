import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
          {/* <Route /> */}
        </Routes>
        {/* <SearchForm />
        <Preloader /> */}
        {/* <Main /> */}
        {/* <About /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
