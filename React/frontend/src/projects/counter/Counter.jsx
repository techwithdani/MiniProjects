import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const increment2 = () => {
    setCounter(counter + 2);
  };

  const decrement2 = () => {
    setCounter((prev) => prev - 2);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(counter * 0);
  };

  return (
    <>
      <div className="h-dvh w-full bg-blue-900 font-mono flex flex-col items-center justify-center">
        <div className="mb-15">
          <p className="text-4xl text-white">{counter}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <Button onClick={increment} text={"INCREMENT"} color={"green"} />
          <Button onClick={decrement} text={"DECREMENT"} />
          <Button onClick={increment2} text={"INCREMENT +2"} />
          <Button onClick={decrement2} text={"DECREMENT -2"} />
          <Button onClick={reset} text={"RESET"} />
        </div>
      </div>
    </>
  );
};

export default Counter;
