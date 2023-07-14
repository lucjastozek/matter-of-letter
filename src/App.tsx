import "./styles.css";

import { useState, useEffect } from "react";

import getRandomLetter from "./utils/getRandomLetter";
import changeScreenFromStart from "./utils/changeScreenFromStart";
import changeScreenFromCorrect from "./utils/changeScreenFromCorrect";
import changeScreenFromIncorrect from "./utils/changeScreenFromIncorrect";
import fetchCountries from "./utils/fetchCountries";
import fetchCities from "./utils/fetchCities";

import PageHeader from "./components/PageHeader";
import StartScreen from "./components/StartScreen";
import CorrectScreen from "./components/CorrectScreen";
import IncorrectScreen from "./components/IncorrectScreen";

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
  const [cities, setCities] = useState<string[]>([]);
  const [category, setCategory] = useState("country");

  useEffect(() => {
    setSecond(moment().diff(start, "seconds"));
  }, [second, x, start]);

  useEffect(() => {
    setTimeout(
      () => setX(Math.floor(moment().add(1, "seconds").get("milliseconds"))),
      500
    );
  }, [x]);

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
  }, [second, screen, countries, inpVal, letter, category, cities]);

  useEffect(() => {
    fetchCountries(setCountries);
    fetchCities(setCities);
  }, []);

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
          category={category}
          cities={cities}
          setCategory={setCategory}
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
          category={category}
          cities={cities}
          setCategory={setCategory}
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
          category={category}
          cities={cities}
          setCategory={setCategory}
        />
      )}
    </>
  );
}

export default App;
