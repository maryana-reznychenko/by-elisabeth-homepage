import React from "react";
import Header from "../src/components/Header";
import MainContent from "../src/main_content/MainContent";
import Footer from "../src/components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
