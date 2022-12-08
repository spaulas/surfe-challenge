import NoteCard from "./NoteCard";
import { Props } from "./types";
import "./styles.scss";

const NotesList = ({ notes }: Props) => {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteCard {...note} key={note.id} />
      ))}
    </section>
  );
};

export default NotesList;
