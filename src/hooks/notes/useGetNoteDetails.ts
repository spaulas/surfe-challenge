import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/notes";
import { useParams } from "react-router-dom";
import { RootReducerState } from "../../type/global";

const useGetNoteDetails = () => {
  const { session, id } = useParams<{session: string, id: string}>();
  const dispatch = useDispatch();

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

  return {
    getNoteById,
    session,
    ...notesState,
  };
};

export default useGetNoteDetails;
