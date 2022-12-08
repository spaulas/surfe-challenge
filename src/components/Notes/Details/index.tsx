import "./styles.scss";
import { ExplicitAny } from "../../../type/global";
import { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import useSendNote from "../../../hooks/notes/useSendNote";
import { useEffect, useRef } from "react";
import { Props } from "./types";
import UserDropdown from "../../Users/UserDropdown";
import useGetUsers from "../../../hooks/users/useGetUsers";
import DetailsHeader from "./Header";
import { User } from "../../../api/users/types";

const NoteDetails = ({ body, id }: Props) => {
  const [currentValue, setCurrentValue] = useState<string>(body);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const draggingUser = useRef("");
  const lastValue = useRef("");
  const index = useRef(0);

  const { updateNote, createNote } = useSendNote();
  const { filterUsers, users, hasError } = useGetUsers();

  const test = () => {
    console.log("currentValue = ", currentValue);
    const finalValue = `${currentValue} @${draggingUser.current}`;
    updateNote(finalValue);
    setCurrentValue(finalValue);
  };

  const handleDroppedUser = () => {
    console.log("DRAGGING USER = ", draggingUser);
    test();
  };

  useEffect(() => {
    const textArea = document.getElementById("textArea");
    if (typeof id === "undefined") {
      createNote();
    }

    textArea?.addEventListener("drop", handleDroppedUser);

    return () => {
      textArea?.removeEventListener("click", handleDroppedUser);
    };

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

    str2.split("").every((val, i) => {
      if (val !== str1.charAt(i)) {
        if (diff === "") {
          index.current = i;
        }

        if (val === " ") {
          return false;
        }

        diff += val;
      }

      return true;
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

  const handleOptionClick = (option: any) => {
    const firstPart = lastValue.current.slice(0, index.current - 1);
    const lastPart = lastValue.current.slice(
      index.current,
      lastValue.current.length
    );

    setCurrentValue(`${firstPart}@${option}${lastPart}`);
  };

  return (
    <section className="note-details">
      <DetailsHeader
        setDraggingUser={(username: string) => {
          draggingUser.current = username;
        }}
      />
      <textarea
        onDragOver={(e) => {
          e.preventDefault();
        }}
        id="textArea"
        value={currentValue}
        onChange={handleNoteOnChange}
      />
      {showDropdown ? (
        <UserDropdown
          hide={() => {
            setShowDropdown(false);
          }}
          users={users}
          handleOptionClick={handleOptionClick}
        />
      ) : null}
    </section>
  );
};

export default NoteDetails;
