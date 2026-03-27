import Result from "./ui/Result.jsx";
import { resultStats } from "../data/results.js";
import Button from "./ui/Button.jsx";
import IconCompleted from "../assets/images/icon-completed.svg";
import IconRestart from "../assets/images/icon-restart.svg";
import formatAccuracy from "../utils/formatAccuracy.js";

export default function Results({
  onReset,
  wpm,
  accuracy,
  errorCount,
  correctCount,
}) {
  function getResultValue(id) {
    if (id === "wpm") return wpm;
    if (id === "accuracy")
      return (
        <span className={accuracy === 100 ? "text-green-500" : "text-red-500"}>
          {formatAccuracy(accuracy)}
        </span>
      );
    if (id === "counts")
      return (
        <span>
          <span className="text-green-500">{correctCount}</span>
          <span className="text-neutral-500">{"/"}</span>
          <span className="text-red-500">{errorCount}</span>
        </span>
      );
  }

  return (
    <div className="flex flex-col pt-300 gap-400 items-center">
      <img
        src={IconCompleted}
        className="h-800 w-800 rounded-full shadow-green-glow"
        alt="icon-completed"
      />
      <div className="flex flex-col items-center pt-300 gap-125">
        <h1 className="text-preset-1">Test Complete!</h1>
        <h2 className="text-preset-3 text-neutral-400">
          Solid run. Keep pushing to beat your high score.
        </h2>
      </div>
      <div className="flex flex-row justify-center pt-250 pb-400 gap-250">
        {resultStats.map((result) => (
          <Result
            key={result.id}
            label={result.label}
            result={getResultValue(result.id)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="secondary" onClick={onReset}>
          Go Again
          <img src={IconRestart} className="invert" alt="restart" />
        </Button>
      </div>
    </div>
  );
}
