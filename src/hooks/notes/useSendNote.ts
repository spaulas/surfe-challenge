import { useDispatch } from "react-redux";
import actions from "../../redux/actions/notes";
import { useHistory, useParams } from "react-router-dom";
import { Note } from "../../api/notes/notes.types";
import { NOTES_BY_ID_PATH } from "../../constants/routes";

const useSendNote = () => {
  const { session, id } = useParams<{ session: string; id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();

  const updateNote = (body: Note["body"]) => {
    dispatch(actions.updateNoteRequest({ session, id, body }));
  };

  const createNote = () => {
    dispatch(actions.createNoteRequest({ session }));
  };

  const redirectToNote = (id: Note["id"]) => {
    history.push(NOTES_BY_ID_PATH(session, id));
  };

  return {
    updateNote,
    createNote,
    redirectToNote,
  };
};

export default useSendNote;
