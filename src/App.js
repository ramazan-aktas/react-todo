import { useState, useEffect } from "react";
import EntryList from "./components/EntryList";
import Form from "./components/Form";

function App() {
  const LS_Key = "todo-app-entries";
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem(LS_Key)) || []
  );

  const addEntry = (task) => {
    setEntries([task, ...entries]);
  };

  useEffect(() => {
    localStorage.setItem(LS_Key, JSON.stringify(entries));
  }, [entries]);

  const toggle = (id) => {
    // When it catches a matching id, reverses its isCompleted attribute
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            isCompleted: !entry.isCompleted,
          };
        }
        return entry;
      })
    );
  };

  const deleteEntry = (id) => {
    // Return entries that are not we are looking for
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="text-4xl text-slate-600 font-quick font-[600] pt-4">
          A Simple TODO App
        </h1>
        <div className="mb-6">
          <Form addEntry={addEntry} />
          <div className="text-left font-quick font-[500] pt-4 ml-4 mr-1">
            <EntryList
              entries={entries}
              toggle={toggle}
              deleteEntry={deleteEntry}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
