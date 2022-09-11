import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function Form({ addEntry }) {
  const [todo, setTodo] = useState({
    id: "",
    entry: "",
    isCompleted: false,
  });
  const handleInputChange = (e) => {
    // Use spread operator to keep other states intact
    setTodo({ ...todo, entry: e.target.value });
  };
  const handleSubmit = (e) => {
    // To prevent submit refreshing the page, add preventDefault
    e.preventDefault();

    if (todo.entry.trim()) {
      addEntry({ ...todo, id: uuid() });
      setTodo({ ...todo, entry: "" });
    } else {
    }
  };

  return (
    // Autocomplete is so annoying since entries are right below the input, thus it is off
    <form onSubmit={handleSubmit}>
      <input
        value={todo.entry}
        onChange={handleInputChange}
        autoComplete="off"
        type="text"
        id="base-input"
        placeholder="Type your task and press Enter"
        className="mt-8 text-xl font-quick font-[500] bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></input>
    </form>
  );
}

export default Form;
