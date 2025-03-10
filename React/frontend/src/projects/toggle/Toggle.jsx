import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="h-dvh w-full bg-indigo-900 flex flex-col items-center justify-center">
        <button className="h-20 w-60 p-2 bg-gray-900 rounded-full cursor-pointer">
          <div className="h-15 w-15 bg-blue-800 rounded-full"></div>
        </button>
      </div>
    </>
  );
};

export default Toggle;
