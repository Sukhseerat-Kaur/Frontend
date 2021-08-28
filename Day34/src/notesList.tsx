import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "./reducer";
import { addNote, deleteNote } from "./actions";
import { useState } from "react";

const NotesList = () => {
  const [input, setInput] = useState<string>("");
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  return (
    <div className="notes-app">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="add-btn"
          onClick={() => {
            dispatch(addNote(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div className="notes">
        {!notes.length ? (
          <h2>Click on add to add notes</h2>
        ) : (
          <div>
            {notes.map((note: string, ind: number) => (
              <div className="notes-item" key={ind}>
                <h3>{note}</h3>
                <button
                  className="dlt-btn"
                  onClick={() => dispatch(deleteNote(ind))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesList;
