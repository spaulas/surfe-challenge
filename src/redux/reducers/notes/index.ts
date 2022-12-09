import { ActionsCreators } from "../../actions/notes";
import NotesActionsTypes from "../../actions/notes/notesActions.types.d";
import InitialNotes from "./notesReducer.types";

const INITIAL_NOTES: InitialNotes = {
  notes: [],
  body: null,
  isLoading: true,
  isUpdating: false,
  hasUpdateError: false,
  hasError: false,
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
        body: null,
        isLoading: true,
        hasError: false,
      };

    case NotesActionsTypes.FETCH_NOTE_BY_ID_SUCCESS:
      return {
        ...state,
        body: action.payload.body,
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
        hasUpdateError: false,
      };

    case NotesActionsTypes.UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        body: action.payload.body,
        isUpdating: false,
        hasUpdateError: false,
      };

    case NotesActionsTypes.UPDATE_NOTE_ERROR:
      return {
        ...state,
        isUpdating: false,
        hasUpdateError: true,
      };

    case NotesActionsTypes.CREATE_NOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasCreateError: undefined,
      };

    case NotesActionsTypes.CREATE_NOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        notes: action.payload.notes,
      };

    case NotesActionsTypes.CREATE_NOTE_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    default:
      return state;
  }
};

export default notesReducer;
