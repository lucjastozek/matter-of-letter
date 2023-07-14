async function fetchCountries(
  setCountries: React.Dispatch<React.SetStateAction<string[]>>
) {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const jsonBody = await response.json();
  const c = [];

  for (const country of jsonBody) {
    c.push(country.name.common);
  }

  setCountries(c);
}

export default fetchCountries;
