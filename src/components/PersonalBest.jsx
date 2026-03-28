import IconPersonalBest from "../assets/images/icon-personal-best.svg";

export default function PersonalBest({ highScore }) {
  return (
    <>
      {highScore !== null && (
        <div className="flex gap-125 items-center">
          <img src={IconPersonalBest} alt="icon-personal-best" />
          <span className="text-preset-3-mobile sm:text-preset-4 text-neutral-400">
            <span className="hidden sm:inline">Personal best: </span>
            <span className="sm:hidden">Best: </span>
            <span className="text-neutral-0">{highScore} WPM</span>
          </span>
        </div>
      )}
    </>
  );
}
