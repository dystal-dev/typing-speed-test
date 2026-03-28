import Result from "./ui/Result.jsx";
import { resultStats } from "../data/results.js";
import Button from "./ui/Button.jsx";
import IconRestart from "../assets/images/icon-restart.svg";
import formatAccuracy from "../utils/formatAccuracy.js";

export default function Results({
  onReset,
  wpm,
  accuracy,
  errorCount,
  correctCount,
  resultVariant,
}) {
  if (!resultVariant) return null;

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
    <div className="flex flex-col pt-300 gap-300 sm:gap-400 items-center">
      <img
        src={resultVariant.icon}
        className={resultVariant.iconClass}
        alt={resultVariant.title}
      />
      <div className="flex flex-col items-center pt-200 sm:pt-300 gap-125">
        <h1 className="text-preset-1-mobile sm:text-preset-1 text-center">
          {resultVariant.title}
        </h1>
        <h2 className="text-preset-5 sm:text-preset-3 text-neutral-400 text-center">
          {resultVariant.subtitle}
        </h2>
      </div>
      <div className="flex flex-col w-full sm:w-fit sm:flex-row justify-center sm:pt-250 pb-200 sm:pb-400 gap-250">
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
          {resultVariant.buttonLabel}
          <img src={IconRestart} className="invert" alt="restart" />
        </Button>
      </div>
    </div>
  );
}
