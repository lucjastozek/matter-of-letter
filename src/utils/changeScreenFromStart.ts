import getCountryFlag from "./getCountryFlag";
import moment from "moment";

interface CSFStartProps {
  setStart: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  setFlag: React.Dispatch<React.SetStateAction<string>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  countries: string[];
  inpVal: string;
  letter: string;
  category: string;
  cities: string[];
}

function changeScreenFromStart({
  setStart,
  setSecond,
  setFlag,
  setScreen,
  countries,
  inpVal,
  letter,
  category,
  cities,
}: CSFStartProps) {
  setStart(moment());
  setSecond(0);

  if (category === "country") {
    if (
      countries.map((c) => c.toLowerCase()).includes(inpVal.toLowerCase()) &&
      inpVal[0].toUpperCase() === letter
    ) {
      getCountryFlag(inpVal, setFlag).then(() => {
        setScreen("correct");
      });
    } else {
      setScreen("incorrect");
    }
  } else {
    if (
      cities.map((c) => c.toLowerCase()).includes(inpVal.toLowerCase()) &&
      inpVal[0].toUpperCase() === letter
    ) {
      setScreen("correct");
    } else {
      setScreen("incorrect");
    }
  }
}

export default changeScreenFromStart;
