import "./styles.scss";
import { InputElement } from "../../../type/global";
import { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import useSendNote from "../../../hooks/notes/useSendNote";
import { useEffect } from "react";
import { Props } from "./types";

const NoteDetails = ({ body, id }: Props) => {
  const [currentValue, setCurrentValue] = useState<string>(body);

  const { updateNote, createNote } = useSendNote();

  useEffect(() => {
    console.log("id = ", id);
    if (typeof id === "undefined") {
      createNote();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNoteOnChange = ({ target: { value } }: InputElement) => {
    console.log("value = ", value);
    setCurrentValue(value);
    debouncedBodyChange(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedBodyChange = useMemo(() => debounce(updateNote, 300), []);

  return (
    <section className="note-details">
      <textarea value={currentValue} onChange={handleNoteOnChange} />
    </section>
  );
};

export default NoteDetails;
