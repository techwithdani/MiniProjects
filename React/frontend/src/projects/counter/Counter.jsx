import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="h-dvh w-full bg-blue-900 font-mono flex flex-col items-center justify-center">
        <div className="mb-15">
          <p className="text-4xl text-white">{counter}</p>
        </div>
        <div className="flex items-center justify-center gap-20">
          <button className="h-10 w-40 text-[1.1rem] bg-green-500 text-white rounded-3xl shadow shadow-black cursor-pointer hover:bg-white hover:text-green-500 transition-all duration-500">
            Increment
          </button>
          <button className="h-10 w-40 text-[1.1rem] bg-red-500 text-white rounded-3xl shadow shadow-black cursor-pointer hover:bg-white hover:text-red-500 transition-all duration-500">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
