import Timer from "./Timer";
import HiddenInput from "./HiddenInput";
import NextButton from "./NextButton";

interface CorrectScreenProps {
  letter: string;
  inpVal: string;
  second: number;
  duration: number;
  flag: string;
  countries: string[];
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  screen: string;
  setStart: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  setFlag: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  cities: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

function CorrectScreen({
  letter,
  inpVal,
  second,
  duration,
  flag,
  countries,
  setSecond,
  screen,
  setStart,
  setScreen,
  setInpVal,
  setLetter,
  setFlag,
  category,
  cities,
  setCategory,
}: CorrectScreenProps): JSX.Element {
  return (
    <div className="content">
      <h2>Correct!!! 🎉</h2>
      <p className="all">Your answer: {inpVal}</p>
      {category === "country" && <img src={flag} alt="flag"></img>}
      <p className="all">All correct answers:</p>
      <div className="answers">
        {category === "country" &&
          countries
            .filter((country) => country[0].toUpperCase() === letter)
            .map((country, index) => (
              <p key={index} className="answer">
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </p>
            ))}
        {category === "city" &&
          cities
            .filter((city) => city[0].toUpperCase() === letter)
            .map((city, index) => (
              <p key={index} className="answer">
                {city.charAt(0).toUpperCase() + city.slice(1)}
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
        category={category}
        cities={cities}
        setCategory={setCategory}
      />
      <HiddenInput setSecond={setSecond} duration={duration} />
    </div>
  );
}

export default CorrectScreen;
