import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

const maxAppWidthPX = 1440;

function App() {
  return (
    <div className="grid font-sora px-1400 py-400 gap-800 max-w-(--app-max-width) mx-auto">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
