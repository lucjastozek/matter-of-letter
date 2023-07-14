import LetterView from "./LetterView";
import Timer from "./Timer";
import NextButton from "./NextButton";

interface StartScreenProps {
  letter: string;
  inpVal: string;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  second: number;
  duration: number;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  screen: string;
  setStart: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  setFlag: React.Dispatch<React.SetStateAction<string>>;
  countries: string[];
}

function StartScreen({
  letter,
  inpVal,
  setInpVal,
  second,
  duration,
  setSecond,
  screen,
  setStart,
  setScreen,
  setLetter,
  setFlag,
  countries,
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
      <NextButton
        screen={screen}
        setStart={setStart}
        setSecond={setSecond}
        setScreen={setScreen}
        setInpVal={setInpVal}
        setLetter={setLetter}
        setFlag={setFlag}
        countries={countries}
        inpVal={inpVal}
        letter={letter}
      />
    </div>
  );
}

export default StartScreen;
