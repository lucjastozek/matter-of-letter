interface HiddenInputProps {
  setSecond: React.Dispatch<React.SetStateAction<number>>;
  duration: number;
}

function HiddenInput({ setSecond, duration }: HiddenInputProps): JSX.Element {
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  return (
    <>
      {!isMobileDevice() && (
        <input
          className="hidden"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSecond(duration);
            }
          }}
        ></input>
      )}
    </>
  );
}

export default HiddenInput;
