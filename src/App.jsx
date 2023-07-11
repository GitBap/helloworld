import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Data from "./components/Data";
import Main from "./components/Main";
import BusinessCard from "./components/BusinessCard";
import BusinessCardList from "./components/BusinessCardList";
import bizcards from "./components/Data";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Business Card App</h1>
      </header>
      <main>
        <BusinessCardList cards={bizcards} />
      </main>
      <footer>
        <p>&copy; 2023 Business Card App</p>
      </footer>
    </div>
  );
}

export default App;
