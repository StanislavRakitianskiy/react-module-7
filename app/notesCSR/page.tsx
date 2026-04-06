"use client";

import { useState } from "react";
import { getNotes, Note } from "@/lib/api";
import Error from "./error";
import NoteList from "@/components/NoteList/NoteList";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const handleClick = async () => {
    try {
      setError(null);
      const response = await getNotes();
      if (response?.notes) {
        setNotes(response.notes);
      }
    } catch (err) {
      setNotes([]);
      setError(err as Error);
    }
  };

  return (
    <section>
      <h1>Note List (CSR)</h1>
      <button onClick={handleClick}>Get my Notes</button>
      {error && <Error error={error} />}
      {notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
};

export default Notes;
