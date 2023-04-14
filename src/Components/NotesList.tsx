import * as React from "react";
import { NotesProp } from "../models/note.model";
import Notes from "./Notes";

interface INoteListProps {
  notes: NotesProp[];
  setNotes: React.Dispatch<React.SetStateAction<NotesProp[]>>;
}

const NoteList: React.FC<INoteListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: String) => {
    console.log(id);
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h1 className="mt-3">Notes</h1>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NoteList;
