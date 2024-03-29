import moment from "moment";
import getRandomLetter from "./getRandomLetter";

interface CSFCorrectProps {
  setStart: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}

function changeScreenFromCorrect({
  setStart,
  setSecond,
  setScreen,
  setInpVal,
  setLetter,
  setCategory,
  category,
}: CSFCorrectProps) {
  if (category === "country") {
    setCategory("city");
  } else {
    setCategory("country");
  }
  setStart(moment());
  setInpVal("");
  setSecond(0);
  setLetter(getRandomLetter);
  setScreen("start");
}

export default changeScreenFromCorrect;
