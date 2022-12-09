import { Note } from "../../../../api/notes/notes.types";
import useSendNote from "../../../../hooks/notes/useSendNote";
import "./styles.scss";

const NoteCard = ({ body, id }: Note) => {
  const { redirectToNote } = useSendNote();

  const handleCardOnClick = () => {
    redirectToNote(id);
  };

  return (
    <div className="note-card" onClick={handleCardOnClick}>
      {body}
    </div>
  );
};

export default NoteCard;
