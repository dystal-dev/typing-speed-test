import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTypingSpeedTest } from "./hooks/useTypingSpeedTest";

function App() {
  const {
    status,
    userInput,
    errorCount,
    correctCount,
    mode,
    passageCharArray,
    wpm,
    accuracy,
    time,
    handleDifficultyChange,
    handleModeChange,
    handleUserInputChange,
    handleReset,
    handleStart,
  } = useTypingSpeedTest();

  return (
    <div className="grid font-sora px-400 pt-400 pb-800 gap-800 lg:px-1400 lg:py-400 lg:gap-800 max-w-(--app-max-width) mx-auto">
      <Header />
      <MainContent
        status={status}
        userInput={userInput}
        errorCount={errorCount}
        correctCount={correctCount}
        mode={mode}
        passageCharArray={passageCharArray}
        wpm={wpm}
        accuracy={accuracy}
        time={time}
        onDifficultyChange={handleDifficultyChange}
        onModeChange={handleModeChange}
        onUserInputChange={handleUserInputChange}
        onReset={handleReset}
        onStart={handleStart}
      />
      <Footer status={status} onReset={handleReset} />
    </div>
  );
}

export default App;
