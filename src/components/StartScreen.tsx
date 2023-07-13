import LetterView from "./LetterView";
import Timer from "./Timer";

interface StartScreenProps {
  letter: string;
  inpVal: string;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  second: number;
  duration: number;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
}

function StartScreen({
  letter,
  inpVal,
  setInpVal,
  second,
  duration,
  setSecond,
}: StartScreenProps): JSX.Element {
  return (
    <div className="content">
      <LetterView
        letter={letter}
        inpVal={inpVal}
        setInpVal={setInpVal}
        setSecond={setSecond}
        duration={duration}
      />
      <Timer second={second} duration={duration} />
    </div>
  );
}

export default StartScreen;
