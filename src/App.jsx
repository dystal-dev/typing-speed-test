import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid font-sora mx-1400 my-400 gap-800">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
