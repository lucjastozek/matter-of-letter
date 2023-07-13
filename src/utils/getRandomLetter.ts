function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export default getRandomLetter;
