async function fetchCities(
  setCities: React.Dispatch<React.SetStateAction<string[]>>
) {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries");
  const jsonBody = await response.json();
  const c = [];

  for (const country of jsonBody.data) {
    c.push(...country.cities);
  }

  setCities(c);
}

export default fetchCities;
