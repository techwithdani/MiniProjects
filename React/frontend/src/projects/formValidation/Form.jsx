import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="w-full h-dvh bg-gray-800 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-90 h-10 bg-white rounded p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-90 h-10 bg-white rounded p-2"
          />
          <button className="w-60 h-10 bg-blue-500 rounded">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Form;
