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
}

function changeScreenFromStart({
  setStart,
  setSecond,
  setFlag,
  setScreen,
  countries,
  inpVal,
  letter,
}: CSFStartProps) {
  setStart(moment());
  setSecond(0);

  if (
    countries.map((c) => c.toLowerCase()).includes(inpVal.toLowerCase()) &&
    inpVal[0].toUpperCase() === letter
  ) {
    getCountryFlag(inpVal, setFlag).then(() => {
      setScreen("correct");
    });
  } else {
    console.log(inpVal, countries);
    setScreen("incorrect");
  }
}

export default changeScreenFromStart;
