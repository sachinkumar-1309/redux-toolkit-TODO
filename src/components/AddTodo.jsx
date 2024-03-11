import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/Todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mt-8 sm:mt-10 flex justify-center ">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 text-base outline-none text-gray-100 py-0 px-3  transition-colors duration-200 ease-in-out "
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-gray-200 bg-green-500 border-0 py-2 sm:px-6 text-lg px-2.5 focus:outline-none hover:bg-green-600 rounded">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
