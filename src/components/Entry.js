import React from "react";
function Entry({ entry, toggle, deleteEntry }) {
  const handleDelete = () => {
    deleteEntry(entry.id);
  };
  const handleCheckbox = () => {
    toggle(entry.id);
  };
  // Show To-do entry with line-through if the task is completed.
  let decoration = entry.isCompleted
    ? "line-through align-middle ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
    : "align-middle ml-2 text-xl font-medium text-gray-900 dark:text-gray-300";
  if (entry.entry !== undefined) {
    return (
      // If the task is already completed, render it pre-checked
      <div className="leading-8">
        {entry.isCompleted ? (
          <input
            onChange={handleCheckbox}
            type="checkbox"
            value=""
            className="align-middle w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked
          />
        ) : (
          <input
            onChange={handleCheckbox}
            type="checkbox"
            value=""
            className="align-middle w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        )}
        <label onClick={handleCheckbox} className={decoration} key={entry.id}>
          {entry.entry}
        </label>
        <button
          className="align-middle ml-1 inline-flex"
          onClick={handleDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    );
  }
}

export default Entry;
