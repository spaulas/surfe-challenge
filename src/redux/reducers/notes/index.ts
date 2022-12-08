import { ActionsCreators } from "@actions/notes";
import NotesActionsTypes from "@actions/notes/notesActions.types";
import InitialNotes from "./notesReducer.types";

const INITIAL_NOTES: InitialNotes = {
  message: null,
  isLoading: false,
  isUpdating: false,
  isCreating: false,
  hasError: false,
  notes: [],
};

const notesReducer = (state = INITIAL_NOTES, action: ActionsCreators) => {
  switch (action.type) {
    case NotesActionsTypes.FETCH_NOTES_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };

    case NotesActionsTypes.FETCH_NOTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        notes: action.payload.notes,
      };

    case NotesActionsTypes.FETCH_NOTES_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    case NotesActionsTypes.FETCH_NOTE_BY_ID_REQUEST:
      return {
        ...state,
        message: null,
        isLoading: true,
        hasError: false,
      };

    case NotesActionsTypes.FETCH_NOTE_BY_ID_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        hasError: false,
      };

    case NotesActionsTypes.FETCH_NOTE_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    case NotesActionsTypes.UPDATE_NOTE_REQUEST:
      return {
        ...state,
        isUpdating: true,
        hasError: false,
      };

    case NotesActionsTypes.UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isUpdating: false,
        hasError: false,
      };

    case NotesActionsTypes.UPDATE_NOTE_ERROR:
      return {
        ...state,
        isUpdating: false,
        hasError: true,
      };

    case NotesActionsTypes.CREATE_NOTE_REQUEST:
      return {
        ...state,
        isCreating: true,
        hasError: false,
      };

    case NotesActionsTypes.CREATE_NOTE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        hasError: false,
        notes: action.payload.notes,
      };

    case NotesActionsTypes.CREATE_NOTE_ERROR:
      return {
        ...state,
        isCreating: false,
        hasError: true,
      };

    default:
      return state;
  }
};

export default notesReducer;
