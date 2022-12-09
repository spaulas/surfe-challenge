import { ActionsCreators } from "../../actions/notes";
import NotesActionsTypes from "../../actions/notes/notesActions.types.d";
import InitialNotes from "./notesReducer.types";

const INITIAL_NOTES: InitialNotes = {
  notes: [],
  body: null,
  isLoading: {
    fetch: true,
    fetchDetails: true,
    update: true,
  },
  hasUpdateError: false,
  hasError: false,
};

const notesReducer = (state = INITIAL_NOTES, action: ActionsCreators) => {
  switch (action.type) {
    case NotesActionsTypes.FETCH_NOTES_REQUEST:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetch: true,
          fetchDetails: true,
        },
        hasError: false,
      };

    case NotesActionsTypes.FETCH_NOTES_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetch: false
        },
        hasError: false,
        notes: action.payload.notes,
      };

    case NotesActionsTypes.FETCH_NOTES_ERROR:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetch: false
        },
        hasError: true,
      };

    case NotesActionsTypes.FETCH_NOTE_BY_ID_REQUEST:
      return {
        ...state,
        body: null,
        isLoading: {
          ...state.isLoading,
          fetch: true,
          fetchDetails: true
        },
        hasError: false,
      };

    case NotesActionsTypes.FETCH_NOTE_BY_ID_SUCCESS:
      return {
        ...state,
        body: action.payload.body,
        isLoading: {
          ...state.isLoading,
          fetchDetails: false
        },
        hasError: false,
      };

    case NotesActionsTypes.FETCH_NOTE_BY_ID_ERROR:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetchDetails: false
        },
        hasError: true,
      };

    case NotesActionsTypes.UPDATE_NOTE_REQUEST:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          update: true
        },
        hasUpdateError: false,
      };

    case NotesActionsTypes.UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        body: action.payload.body,
        isLoading: {
          ...state.isLoading,
          update: false
        },
        hasUpdateError: false,
      };

    case NotesActionsTypes.UPDATE_NOTE_ERROR:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          update: false
        },
        hasUpdateError: true,
      };

    case NotesActionsTypes.CREATE_NOTE_REQUEST:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetch: true
        },
        hasCreateError: undefined,
      };

    case NotesActionsTypes.CREATE_NOTE_SUCCESS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetch: false
        },
        hasError: false,
        notes: action.payload.notes,
      };

    case NotesActionsTypes.CREATE_NOTE_ERROR:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          fetch: false
        },
        hasError: true,
      };

    default:
      return state;
  }
};

export default notesReducer;
