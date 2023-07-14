async function getCountryFlag(
  c: string,
  setFlag: React.Dispatch<React.SetStateAction<string>>
) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${c}`);
  const jsonBody = await response.json();
  setFlag(jsonBody[0].flags.png);
}

export default getCountryFlag;
