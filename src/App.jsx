import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTypingSpeedTest } from "./hooks/useTypingSpeedTest";

function App() {
  const {
    testStarted,
    setTestStarted,
    userInput,
    passageCharArray,
    handleUserInputChange,
    stats,
    setPassage,
    finished,
    setFinished,
    resetTest,
  } = useTypingSpeedTest();

  return (
    <div className="grid font-sora px-400 pt-400 pb-800 gap-800 lg:px-1400 lg:py-400 lg:gap-800 max-w-(--app-max-width) mx-auto">
      <Header />
      <MainContent
        testStarted={testStarted}
        setTestStarted={setTestStarted}
        userInput={userInput}
        passageCharArray={passageCharArray}
        handleUserInputChange={handleUserInputChange}
        stats={stats}
        setPassage={setPassage}
        finished={finished}
        setFinished={setFinished}
      />
      <Footer testStarted={testStarted} resetTest={resetTest} />
    </div>
  );
}

export default App;
