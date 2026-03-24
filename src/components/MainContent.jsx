import StatsRow from "./StatsRow";
import SettingsRow from "./SettingsRow";
import TextBox from "./TextBox";
import Results from "./Results";

export default function MainContent({
  getNewPassage,
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
  mode,
  setMode,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="grid gap-8">
      <div className="pb-200 border-b-1 border-neutral-700 gap-250 flex flex-col xl:flex-row xl:items-center justify-between">
        <StatsRow stats={stats} mode={mode} />
        <SettingsRow setDifficulty={setDifficulty} setMode={setMode} />
      </div>
      {!finished && (
        <TextBox
          testStarted={testStarted}
          setTestStarted={setTestStarted}
          userInput={userInput}
          passageCharArray={passageCharArray}
          handleUserInputChange={handleUserInputChange}
          setPassage={setPassage}
          difficulty={difficulty}
        />
      )}
      {finished && (
        <Results
          resetTest={resetTest}
          getNewPassage={getNewPassage}
          setFinished={setFinished}
        />
      )}
    </div>
  );
}
