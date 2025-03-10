const Button = ({ onClick, text }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="h-10 w-40 text-[1.1rem] bg-red-500 text-white rounded-3xl shadow shadow-black cursor-pointer hover:bg-white hover:text-red-500 transition-all duration-500"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
