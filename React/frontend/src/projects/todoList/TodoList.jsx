const TodoList = () => {
  return (
    <>
      <div className="h-dvh w-full bg-gray-800 flex items-start justify-center gap-5">
        <div className="mt-20">
          <input
            type="text"
            className="w-60 h-10 bg-white rounded-2xl p-2 sm:w-120 md:w-160"
          />
        </div>
        <div className="mt-20">
          <button className="w-25 h-10 bg-blue-500 rounded-2xl">Add</button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
