import Timer from "./Timer";
import HiddenInput from "./HiddenInput";

interface IncorrectScreenProps {
  letter: string;
  second: number;
  duration: number;
  countries: string[];
  setSecond: React.Dispatch<React.SetStateAction<number>>;
}

function IncorrectScreen({
  letter,
  second,
  duration,
  countries,
  setSecond,
}: IncorrectScreenProps): JSX.Element {
  return (
    <div className="content">
      <h2>Incorrect ☹️</h2>
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

export default IncorrectScreen;
