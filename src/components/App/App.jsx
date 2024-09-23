import { useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <SearchForm />
        <Preloader />
        <Main />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
