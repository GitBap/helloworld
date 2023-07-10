import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Data from "./Data";
import Main from "./components/Main";
import BusinessCard from "./components/BusinessCard";

function App() {
  const { name } = Data();
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
