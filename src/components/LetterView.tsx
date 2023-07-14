interface LetterViewProps {
  letter: string;
  inpVal: string;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  duration: number;
  category: string;
}

function LetterView({
  letter,
  inpVal,
  setInpVal,
  setSecond,
  duration,
  category,
}: LetterViewProps): JSX.Element {
  return (
    <div className="letter-view">
      <h3 className="letter-label">Category: {category}</h3>
      <h3 className="letter-label">letter</h3>
      <h2 className="letter">{letter}</h2>
      <input
        type="text"
        placeholder={`Enter ${category} name`}
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSecond(duration);
          }
        }}
        autoFocus
      ></input>
    </div>
  );
}

export default LetterView;
