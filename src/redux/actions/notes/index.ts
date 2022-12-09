import { ValueOf } from "../../../type/global.d";
import NotesActionsTypes from "./notesActions.types.d";
import {
  Note,
  NoteByIdPayload,
  NotesPayload,
  UpdateNotePayload,
} from "../../../api/notes/types";

const fetchNotesRequest = ({ session }: NotesPayload) => {
  return {
    type: NotesActionsTypes.FETCH_NOTES_REQUEST,
    payload: { session },
  };
};

const fetchNotesSucceeded = (notes: Note[]) => ({
  type: NotesActionsTypes.FETCH_NOTES_SUCCESS,
  payload: { notes },
});

const fetchNotesFailed = (error: any) => ({
  type: NotesActionsTypes.FETCH_NOTES_ERROR,
  payload: { error },
});

const fetchNoteByIdRequest = ({ session, id }: NoteByIdPayload) => {
  return {
    type: NotesActionsTypes.FETCH_NOTE_BY_ID_REQUEST,
    payload: { session, id },
  };
};

const fetchNoteByIdSucceeded = (body: string) => ({
  type: NotesActionsTypes.FETCH_NOTE_BY_ID_SUCCESS,
  payload: { body },
});

const fetchNoteByIdFailed = (error: any) => ({
  type: NotesActionsTypes.FETCH_NOTE_BY_ID_ERROR,
  payload: { error },
});

const updateNoteRequest = ({ session, id, body }: UpdateNotePayload) => {
  return {
    type: NotesActionsTypes.UPDATE_NOTE_REQUEST,
    payload: { session, id, body },
  };
};

const updateNoteSucceeded = (body: string) => ({
  type: NotesActionsTypes.UPDATE_NOTE_SUCCESS,
  payload: { body },
});

const updateNoteFailed = (error: any) => ({
  type: NotesActionsTypes.UPDATE_NOTE_ERROR,
  payload: { error },
});

const createNoteRequest = ({ session }: NotesPayload) => {
  return {
    type: NotesActionsTypes.CREATE_NOTE_REQUEST,
    payload: { session },
  };
};

const createNoteSucceeded = (notes: Note[]) => ({
  type: NotesActionsTypes.CREATE_NOTE_SUCCESS,
  payload: { notes },
});

const createNoteFailed = (error: any) => ({
  type: NotesActionsTypes.CREATE_NOTE_ERROR,
  payload: { error },
});

const actionsCreators = Object.freeze({
  fetchNotesRequest,
  fetchNotesSucceeded,
  fetchNotesFailed,
  fetchNoteByIdRequest,
  fetchNoteByIdSucceeded,
  fetchNoteByIdFailed,
  updateNoteRequest,
  updateNoteSucceeded,
  updateNoteFailed,
  createNoteRequest,
  createNoteSucceeded,
  createNoteFailed,
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;
