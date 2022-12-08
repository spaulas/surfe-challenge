export type NotesPayload = {
  session: string;
};

export type NoteByIdPayload = NotesPayload & {
  id: string;
};

export type UpdateNotePayload = NoteByIdPayload & {
  message: string;
};

export type CreateNotePayload = NotesPayload & {
  message: string;
};
