import React from "react";
import "./App.css";

import Header from "../src/components/Header";
import MainContent from "../src/main_content/MainContent";
import Footer from "../src/components/Footer";

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
