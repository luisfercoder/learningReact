import { useRef, useState } from "react";

export default function StopWatchTimer() {
  const [timer, setTimer] = useState(0);

  const timerRef = useRef(null)
  const startTimer = () => {
    timerRef.current= setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimer(0);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.trunc(timer / 60)}mins </span>
      <span> {timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
