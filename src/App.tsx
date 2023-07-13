import "./styles.css";

import { useState, useEffect } from "react";

import getRandomLetter from "./utils/getRandomLetter";

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

  function changeScreenFromStart() {
    setStart(moment());
    setSecond(0);

    if (countries.map((c) => c.toLowerCase()).includes(inpVal.toLowerCase())) {
      getCountryFlag(inpVal).then(() => {
        setScreen("correct");
      });
    } else {
      console.log(inpVal, countries);
      setScreen("incorrect");
    }
  }

  function changeScreenFromCorrect() {
    setStart(moment());
    setInpVal("");
    setSecond(0);
    setLetter(getRandomLetter);
    setScreen("start");
  }

  function changeScreenFromIncorrect() {
    setStart(moment());
    setInpVal("");
    setSecond(0);
    setLetter(getRandomLetter);
    setScreen("start");
  }

  useEffect(() => {
    if (second >= duration) {
      if (screen === "start") {
        changeScreenFromStart();
      } else if (screen === "correct") {
        changeScreenFromCorrect();
      } else {
        changeScreenFromIncorrect();
      }
    }
  });

  async function getCountryFlag(c: string) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${c}`);
    const jsonBody = await response.json();
    setFlag(jsonBody[0].flags.png);
  }

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
        />
      )}
    </>
  );
}

export default App;
