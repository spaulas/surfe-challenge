import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/notes";
import { useHistory, useParams } from "react-router-dom";
import { RootReducerState } from "../../type/global";
import { NOTES_BY_ID_PATH } from "../../constants/routes";

const useGetNoteDetails = () => {
  const { session, id } = useParams<{ session: string; id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();

  const notesState = useSelector(({ Notes }: RootReducerState) => ({
    body: Notes.body,
    isLoading: Notes.isLoading,
    hasError: Notes.hasError,
  }));

  const getNoteById = () => {
    if (session && id) {
      dispatch(actions.fetchNoteByIdRequest({ session, id }));
    }
  };

  const redirectToNewNote = () => {
    history.push(NOTES_BY_ID_PATH(session));
  };

  return {
    getNoteById,
    redirectToNewNote,
    session,
    id,
    ...notesState,
  };
};

export default useGetNoteDetails;
