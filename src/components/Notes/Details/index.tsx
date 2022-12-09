import { useState, useMemo, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import UserDropdown from "../../Users/UserDropdown";
import DetailsHeader from "./Header";
import useSendNote from "../../../hooks/notes/useSendNote";
import useGetUsers from "../../../hooks/users/useGetUsers";
import { Props } from "./types";
import { ExplicitAny } from "../../../type/global";
import "./styles.scss";

const NoteDetails = ({ body }: Props): React.ReactElement => {
  const [currentValue, setCurrentValue] = useState<string>(body);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const draggingUser = useRef<string>("");
  const lastValue = useRef<string>("");
  const index = useRef<number>(0);

  const { updateNote } = useSendNote();
  const { filterUsers, users, hasError } = useGetUsers();

  useEffect(() => {
    if (hasError === false) {
      filterUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasError]);

  const handleDroppedUser = () => {
    const finalValue = `${currentValue} @${draggingUser.current}`;
    updateNote(finalValue);
    setCurrentValue(finalValue);
  };

  const handleOpenDropdown = (value: string) => {
    lastValue.current = value;
    setShowDropdown(true);
  };

  const handleOnCloseDropdown = () => {
    setShowDropdown(false);
    lastValue.current = "";
  };

  const handleOptionClick = (option: any) => {
    const firstPart = lastValue.current.slice(0, index.current - 1);
    const lastPart = lastValue.current.slice(
      index.current,
      lastValue.current.length
    );

    const finalValue = `${firstPart}@${option}${lastPart}`;

    setCurrentValue(finalValue);
    updateNote(finalValue);
  };

  const handleNoteOnChange = ({
    target: { value },
    nativeEvent: { data: char },
  }: ExplicitAny) => {
    if (char === "@") {
      handleOpenDropdown(value);
    } else if (char === " ") {
      handleOnCloseDropdown();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
        onDrop={handleDroppedUser}
        id="textArea"
        value={currentValue}
        onChange={handleNoteOnChange}
      />
      {showDropdown ? (
        <UserDropdown
          closeDropdown={() => {
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
