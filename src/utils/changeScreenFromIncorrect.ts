import moment from "moment";
import getRandomLetter from "./getRandomLetter";

interface CSFIncorrectProps {
  setStart: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
}

function changeScreenFromIncorrect({
  setStart,
  setSecond,
  setScreen,
  setInpVal,
  setLetter,
}: CSFIncorrectProps) {
  setStart(moment());
  setInpVal("");
  setSecond(0);
  setLetter(getRandomLetter);
  setScreen("start");
}

export default changeScreenFromIncorrect;
