import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const clickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="h-dvh w-full bg-indigo-900 flex flex-col items-center justify-center">
        <button
          onClick={clickToggle}
          className={`h-20 w-50 p-2 rounded-full cursor-pointer ${
            toggle ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`h-15 w-15 bg-gray-200 rounded-full transition-transform duration-500 ${
              toggle ? "translate-x-31" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>
    </>
  );
};

export default Toggle;
