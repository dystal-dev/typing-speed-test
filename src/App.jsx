import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid font-sora mx-28 my-8 gap-16">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
