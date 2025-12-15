import { useRef } from 'react';

function Focus() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // focus the input
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}

export default Focus;
