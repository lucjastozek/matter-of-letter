interface TimerProps {
  second: number;
  duration: number;
}

function Timer({ second, duration }: TimerProps): JSX.Element {
  const width = `${(second / duration) * 50}vw`;
  return (
    <div className="timer" style={{ width: "50vw" }}>
      <div className="time-left" style={{ width }}></div>
    </div>
  );
}

export default Timer;
