import React from "react";
import Entry from "./Entry";

function EntryList({ entries, toggle, deleteEntry }) {
  return (
    <ul className="space-y-1 w-full list-inside text-gray-500 dark:text-gray-400 list-none">
      {entries.map((entry) => (
        <li key={entry.id} id={entry.id} className="pb-2">
          <Entry
            entry={entry}
            toggle={toggle}
            deleteEntry={deleteEntry}
          />
        </li>
      ))}
    </ul>
  );
}
export default EntryList;
