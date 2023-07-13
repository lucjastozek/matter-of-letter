function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWYZ";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export default getRandomLetter;
