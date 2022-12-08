import { Note } from "../../../api/notes/notes.types";

type InitialNotes = {
  body: string | null;
  isLoading: boolean;
  isUpdating: boolean;
  isCreating: boolean;
  hasError: boolean;
  notes: Note[];
};

export default InitialNotes;
