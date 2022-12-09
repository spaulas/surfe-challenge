import { Note } from "../../../api/notes/types";

type InitialNotes = {
  notes: Note[];
  body: string | null;
  isLoading: boolean;
  isUpdating: boolean;
  hasError: boolean;
  hasUpdateError: boolean;
};

export default InitialNotes;
