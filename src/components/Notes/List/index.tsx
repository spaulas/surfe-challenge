import NoteCard from "./NoteCard";
import { Props } from "./types";
import "./styles.scss";
import useGetNoteDetails from "../../../hooks/notes/useGetNoteDetails";

const NotesList = ({ notes }: Props) => {
  const {redirectToNewNote} = useGetNoteDetails()

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteCard {...note} key={note.id} />
      ))}
      <button onClick={() => redirectToNewNote()}>New</button>
    </section>
  );
};

export default NotesList;
