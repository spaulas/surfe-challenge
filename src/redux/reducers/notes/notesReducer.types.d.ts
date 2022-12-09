import { Note } from "../../../api/notes/types";

type InitialNotes = {
  notes: Note[];
  body: string | null;
  isLoading: {
    fetch: boolean;
    fetchDetails: boolean;
    update: boolean;
  };
  hasError: boolean;
  hasUpdateError: boolean;
};

export default InitialNotes;
