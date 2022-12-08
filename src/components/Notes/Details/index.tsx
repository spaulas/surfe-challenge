import "./styles.scss";
import { ExplicitAny } from "../../../type/global";
import { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import useSendNote from "../../../hooks/notes/useSendNote";
import { useEffect, useRef } from "react";
import { Props } from "./types";
import UserDropdown from "../../Users/UserDropdown";
import useGetUsers from "../../../hooks/users/useGetUsers";

const NoteDetails = ({ body, id }: Props) => {
  const [currentValue, setCurrentValue] = useState<string>(body);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const lastValue = useRef("");

  const { updateNote, createNote } = useSendNote();
  const { filterUsers, users, hasError } = useGetUsers();

  useEffect(() => {
    if (typeof id === "undefined") {
      createNote();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hasError === false) {
      filterUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasError]);

  const handleNoteOnChange = (e: ExplicitAny) => {
    const {
      target: { value },
      nativeEvent: { data: char },
    } = e;

    if (char === "@") {
      lastValue.current = value;
      setShowDropdown(true);
    } else if (char === " ") {
      setShowDropdown(false);
      lastValue.current = "";
    }

    setCurrentValue(value);
    debouncedBodyChange(value);

    if (showDropdown) {
      debouncedMentionChange(value);
    }
  };

  const filterWithDiff = (value: string) => {
    const diff = findDiff(lastValue.current, value);
    filterUsers(diff);
  };

  const findDiff = (str1: string, str2: string) => {
    let diff = "";

    str2.split("").forEach((val, i) => {
      if (val !== str1.charAt(i)) {
        diff += val;
      }
    });

    return diff;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedBodyChange = useMemo(() => debounce(updateNote, 300), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedMentionChange = useMemo(
    () => debounce(filterWithDiff, 300),
    []
  );

  return (
    <section className="note-details">
      <div className="note-details__header">
        <button>Back</button>
      </div>
      <textarea value={currentValue} onChange={handleNoteOnChange} />
      {showDropdown ? (
        <UserDropdown
          hide={() => {
            setShowDropdown(false);
          }}
          users={users}
        />
      ) : null}
    </section>
  );
};

export default NoteDetails;
