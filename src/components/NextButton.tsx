import changeScreenFromStart from "../utils/changeScreenFromStart";
import changeScreenFromCorrect from "../utils/changeScreenFromCorrect";
import changeScreenFromIncorrect from "../utils/changeScreenFromIncorrect";

interface NextButtonProps {
  screen: string;
  setStart: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  setFlag: React.Dispatch<React.SetStateAction<string>>;
  countries: string[];
  inpVal: string;
  letter: string;
  category: string;
  cities: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

function handleScreenChange({
  screen,
  setStart,
  setSecond,
  setScreen,
  setInpVal,
  setLetter,
  setFlag,
  countries,
  inpVal,
  letter,
  category,
  cities,
  setCategory,
}: NextButtonProps) {
  if (screen === "start") {
    changeScreenFromStart({
      setStart,
      setSecond,
      setFlag,
      setScreen,
      countries,
      inpVal,
      letter,
      category,
      cities,
    });
  } else if (screen === "correct") {
    changeScreenFromCorrect({
      setStart,
      setSecond,
      setScreen,
      setInpVal,
      setLetter,
      setCategory,
      category,
    });
  } else {
    changeScreenFromIncorrect({
      setStart,
      setSecond,
      setScreen,
      setInpVal,
      setLetter,
    });
  }
}

function NextButton({
  screen,
  setStart,
  setSecond,
  setScreen,
  setInpVal,
  setLetter,
  setFlag,
  countries,
  inpVal,
  letter,
  category,
  cities,
  setCategory,
}: NextButtonProps): JSX.Element {
  return (
    <button
      onClick={() =>
        handleScreenChange({
          screen,
          setStart,
          setSecond,
          setScreen,
          setInpVal,
          setLetter,
          setFlag,
          countries,
          inpVal,
          letter,
          category,
          cities,
          setCategory,
        })
      }
    >
      Next
    </button>
  );
}

export default NextButton;
