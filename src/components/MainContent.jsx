import StatsRow from "./StatsRow";
import SettingsRow from "./SettingsRow";
import TextBox from "./TextBox";
import Results from "./Results";

export default function MainContent({
  status,
  userInput,
  errorCount,
  correctCount,
  mode,
  passageCharArray,
  wpm,
  accuracy,
  time,
  onDifficultyChange,
  onModeChange,
  onUserInputChange,
  onReset,
  onStart,
}) {
  return (
    <div className="grid gap-8">
      {status !== "finished" && (
        <>
          <div className="pb-200 border-b-1 border-neutral-700 gap-250 flex flex-col xl:flex-row xl:items-center justify-between">
            <StatsRow stats={{ wpm, accuracy, time }} mode={mode} />
            <SettingsRow
              onDifficultyChange={onDifficultyChange}
              onModeChange={onModeChange}
            />
          </div>
          <TextBox
            status={status}
            userInput={userInput}
            passageCharArray={passageCharArray}
            onUserInputChange={onUserInputChange}
            onStart={onStart}
          />
        </>
      )}
      {status === "finished" && (
        <Results
          onReset={onReset}
          wpm={wpm}
          accuracy={accuracy}
          errorCount={errorCount}
          correctCount={correctCount}
        />
      )}
    </div>
  );
}
