import "./styles.css";

import { useState, useEffect } from "react";

// helper functions
import getRandomLetter from "./utils/getRandomLetter";
import changeScreenFromStart from "./utils/changeScreenFromStart";
import changeScreenFromCorrect from "./utils/changeScreenFromCorrect";
import changeScreenFromIncorrect from "./utils/changeScreenFromIncorrect";
import fetchCountries from "./utils/fetchCountries";
import fetchCities from "./utils/fetchCities";

// components
import PageHeader from "./components/PageHeader";
import StartScreen from "./components/StartScreen";
import CorrectScreen from "./components/CorrectScreen";
import IncorrectScreen from "./components/IncorrectScreen";

// time
import moment from "moment";

function App(): JSX.Element {
  // timer duration in seconds
  const duration = 10;

  // states
  const [letter, setLetter] = useState(getRandomLetter());
  const [inpVal, setInpVal] = useState("");
  // timer start timestamp
  const [start, setStart] = useState(moment());
  const [now, setNow] = useState(moment().get("second"));
  // current second of the timer, between -1 and duration
  const [second, setSecond] = useState(-1);
  const [screen, setScreen] = useState("start");

  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [flag, setFlag] = useState("");
  const [category, setCategory] = useState("country");

  // updating second
  useEffect(() => {
    setSecond(moment().diff(start, "seconds"));
  }, [second, now, start]);

  // updating current time
  useEffect(() => {
    setTimeout(
      () => setNow(Math.floor(moment().add(1, "seconds").get("milliseconds"))),
      500
    );
  }, [now]);

  // updating screen
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

  // fetching data from APIs
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
