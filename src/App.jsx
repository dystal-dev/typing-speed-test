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
    difficulty,
    passageCharArray,
    wpm,
    accuracy,
    time,
    highScore,
    resultVariant,
    handleDifficultyChange,
    handleModeChange,
    handleUserInputChange,
    handleReset,
    handleRestart,
    handleStart,
  } = useTypingSpeedTest();

  return (
    <div className="grid font-sora px-200 pt-200 pb-400 gap-400 sm:px-400 sm:pt-400 sm:pb-800 sm:gap-500 lg:px-1400 lg:py-400 lg:gap-800 max-w-(--app-max-width) mx-auto">
      <Header highScore={highScore} />
      <MainContent
        status={status}
        userInput={userInput}
        errorCount={errorCount}
        correctCount={correctCount}
        mode={mode}
        difficulty={difficulty}
        passageCharArray={passageCharArray}
        wpm={wpm}
        accuracy={accuracy}
        time={time}
        resultVariant={resultVariant}
        onDifficultyChange={handleDifficultyChange}
        onModeChange={handleModeChange}
        onUserInputChange={handleUserInputChange}
        onReset={handleReset}
        onStart={handleStart}
      />
      <Footer status={status} onRestart={handleRestart} />
    </div>
  );
}

export default App;
