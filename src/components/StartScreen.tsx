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
  category: string;
  cities: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
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
  category,
  cities,
  setCategory,
}: StartScreenProps): JSX.Element {
  return (
    <div className="content">
      <LetterView
        letter={letter}
        inpVal={inpVal}
        setInpVal={setInpVal}
        setSecond={setSecond}
        duration={duration}
        category={category}
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
        category={category}
        cities={cities}
        setCategory={setCategory}
      />
    </div>
  );
}

export default StartScreen;
