export default function formatTime(totalSeconds, mode) {
  const totalDisplaySeconds =
    mode.type === "timed" ? mode.startTime - totalSeconds : totalSeconds;

  const minutes = Math.floor(totalDisplaySeconds / 60);
  const seconds = totalDisplaySeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
