function turnToWord(s: string): string {
  let word = "";

  for (const char of s) {
    if (/[A-Z]/i.test(char) || char === " ") {
      word += char;
    }
  }

  return word;
}

export default turnToWord;
