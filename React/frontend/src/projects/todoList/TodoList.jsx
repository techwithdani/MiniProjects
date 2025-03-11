import { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      return;
    }

    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="h-dvh w-full bg-gray-800">
        <form
          onSubmit={submitHandler}
          className="flex items-start justify-center gap-5"
        >
          <div className="mt-20">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-70 h-10 bg-white rounded-2xl p-2 sm:w-120 md:w-160"
            />
          </div>
          <div className="mt-20">
            <button
              type="submit"
              className="w-25 h-10 bg-blue-500 rounded-2xl cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>
        <div className="flex items-start justify-center mt-5">
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="w-auto h-auto rounded-2xl p-3 bg-white flex items-center justify-center gap-6 text-wrap"
              >
                <p className="w-70 break-words sm:w-120 md:w-160">
                  {todo.text}
                </p>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="h-10 w-20 bg-black rounded-2xl text-red-500 cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
