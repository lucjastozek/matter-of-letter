import "./styles.css";

import { useState, useEffect } from "react";

import getRandomLetter from "./utils/getRandomLetter";
import changeScreenFromStart from "./utils/changeScreenFromStart";
import changeScreenFromCorrect from "./utils/changeScreenFromCorrect";
import changeScreenFromIncorrect from "./utils/changeScreenFromIncorrect";

import PageHeader from "./components/PageHeader";
import StartScreen from "./components/StartScreen";
import CorrectScreen from "./components/CorrectScreen";
import IncorrectScreen from "./components/IncorrectScreen";
import NextButton from "./components/NextButton";

import moment from "moment";

function App(): JSX.Element {
  const duration = 10;
  const [letter, setLetter] = useState(getRandomLetter());
  const [inpVal, setInpVal] = useState("");
  const [start, setStart] = useState(moment());
  const [second, setSecond] = useState(-1);
  const [screen, setScreen] = useState("start");
  const [countries, setCountries] = useState<string[]>([]);
  const [flag, setFlag] = useState("");
  const [x, setX] = useState(moment().get("second"));

  useEffect(() => {
    setSecond(moment().diff(start, "seconds"));
  }, [second, x, start]);

  useEffect(() => {
    setTimeout(
      () => setX(Math.floor(moment().add(1, "seconds").get("milliseconds"))),
      500
    );
  }, [x]);

  async function fetchCountries() {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const jsonBody = await response.json();
    const c = [];

    for (const country of jsonBody) {
      c.push(country.name.common);
    }

    setCountries(c);
  }

  useEffect(() => {
    if (second >= duration) {
      if (screen === "start") {
        changeScreenFromStart({
          setStart,
          setSecond,
          setFlag,
          setScreen,
          countries,
          inpVal,
          letter,
        });
      } else if (screen === "correct") {
        changeScreenFromCorrect({
          setStart,
          setSecond,
          setScreen,
          setInpVal,
          setLetter,
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
  });

  fetchCountries();

  return (
    <>
      <PageHeader />
      {screen === "start" && (
        <StartScreen
          letter={letter}
          inpVal={inpVal}
          setInpVal={setInpVal}
          second={second}
          duration={duration}
          setSecond={setSecond}
          screen={screen}
          setStart={setStart}
          setScreen={setScreen}
          setLetter={setLetter}
          setFlag={setFlag}
          countries={countries}
        />
      )}
      {screen === "correct" && (
        <CorrectScreen
          letter={letter}
          inpVal={inpVal}
          second={second}
          duration={duration}
          flag={flag}
          countries={countries}
          setSecond={setSecond}
          screen={screen}
          setStart={setStart}
          setScreen={setScreen}
          setInpVal={setInpVal}
          setLetter={setLetter}
          setFlag={setFlag}
        />
      )}

      {screen === "incorrect" && (
        <IncorrectScreen
          letter={letter}
          second={second}
          duration={duration}
          countries={countries}
          setSecond={setSecond}
          inpVal={inpVal}
          screen={screen}
          setStart={setStart}
          setScreen={setScreen}
          setInpVal={setInpVal}
          setLetter={setLetter}
          setFlag={setFlag}
        />
      )}
    </>
  );
}

export default App;
