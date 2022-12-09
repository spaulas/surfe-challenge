import { all, put, takeLatest, call } from "redux-saga/effects";
import NotesActionTypes from "../../actions/notes/notesActions.types.d";
import actions from "../../actions/notes";
import {
  fetchNotesAPIRequest,
  fetchNoteByIdAPIRequest,
  updateNoteAPIRequest,
  createNoteAPIRequest,
} from "../../../api/notes";

export function* fetchNotesAsync({ payload }: any): any {
  try {
    const notes = yield call(fetchNotesAPIRequest, payload);
    console.log('notes = ', notes)
    yield put(actions.fetchNotesSucceeded(notes));
  } catch (error) {
    yield put(actions.fetchNotesFailed(error));
  }
}

export function* fetchNotesByIdAsync({ payload }: any): any {
  try {
    const note = yield call(fetchNoteByIdAPIRequest, payload);
    console.log('NOTE FETCH = ', note)
    yield put(actions.fetchNoteByIdSucceeded(note.body));
  } catch (error) {
    yield put(actions.fetchNoteByIdFailed(error));
  }
}

export function* updateNoteByIdAsync({ payload }: any): any {
  try {
    const note = yield call(updateNoteAPIRequest, payload);
    yield put(actions.updateNoteSucceeded(note.body));
  } catch (error) {
    yield put(actions.updateNoteFailed(error));
  }
}

export function* createNoteAsync({ payload }: any): any {
  try {
    yield call(createNoteAPIRequest, payload);
    yield put(actions.createNoteSucceeded(payload));
  } catch (error) {
    yield put(actions.createNoteFailed(error));
  }
}

export default function* sagaCollections() {
  yield all([
    takeLatest(NotesActionTypes.FETCH_NOTES_REQUEST, fetchNotesAsync),
    takeLatest(NotesActionTypes.FETCH_NOTE_BY_ID_REQUEST, fetchNotesByIdAsync),
    takeLatest(NotesActionTypes.UPDATE_NOTE_REQUEST, updateNoteByIdAsync),
    takeLatest(NotesActionTypes.CREATE_NOTE_REQUEST, createNoteAsync),
  ]);
}
