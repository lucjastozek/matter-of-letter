import Timer from "./Timer";
import HiddenInput from "./HiddenInput";
import NextButton from "./NextButton";

interface IncorrectScreenProps {
  letter: string;
  second: number;
  duration: number;
  countries: string[];
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  inpVal: string;
  screen: string;
  setStart: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  setFlag: React.Dispatch<React.SetStateAction<string>>;
}

function IncorrectScreen({
  letter,
  second,
  duration,
  countries,
  setSecond,
  inpVal,
  screen,
  setStart,
  setScreen,
  setInpVal,
  setLetter,
  setFlag,
}: IncorrectScreenProps): JSX.Element {
  return (
    <div className="content">
      <h2>Incorrect ☹️</h2>
      <p className="all">Your answer: {inpVal}</p>
      <p className="all">All correct answers:</p>
      <div className="answers">
        {countries
          .filter((country) => country[0].toUpperCase() === letter)
          .map((country, index) => (
            <p key={index} className="answer">
              {country.charAt(0).toUpperCase() + country.slice(1)}
            </p>
          ))}
      </div>
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
      <HiddenInput setSecond={setSecond} duration={duration} />
    </div>
  );
}

export default IncorrectScreen;
