import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

const maxAppWidthPX = 1440;

function App() {
  return (
    <div className="grid font-sora px-400 pt-400 pb-800 gap-800 lg:px-1400 lg:py-400 lg:gap-800 max-w-(--app-max-width) mx-auto">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
