import { useState } from "react";

function useCounter(initial: number): [number, (newCount: number) => void] {
  const [counter, setCounter] = useState<number>(initial);

  return [counter + 100, setCounter];
}

export default useCounter;
