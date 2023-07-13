import Timer from "./Timer";
import HiddenInput from "./HiddenInput";

interface CorrectScreenProps {
  letter: string;
  inpVal: string;
  second: number;
  duration: number;
  flag: string;
  countries: string[];
  setSecond: React.Dispatch<React.SetStateAction<number>>;
}

function CorrectScreen({
  letter,
  inpVal,
  second,
  duration,
  flag,
  countries,
  setSecond,
}: CorrectScreenProps): JSX.Element {
  return (
    <div className="content">
      <h2>Correct!!! 🎉</h2>
      <p className="all">Your answer: {inpVal}</p>
      <img src={flag} alt="flag"></img>
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
      <HiddenInput setSecond={setSecond} duration={duration} />
    </div>
  );
}

export default CorrectScreen;
