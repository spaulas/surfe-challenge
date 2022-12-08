import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/notes";
import { useParams } from "react-router-dom";
import { RootReducerState } from "../../type/global";

const useGetNotes = () => {
  const { session } = useParams<{session: string}>();
  const dispatch = useDispatch();

  const notesState = useSelector(({ Notes }: RootReducerState) => ({
    notes: Notes.notes,
    isLoading: Notes.isLoading,
    hasError: Notes.hasError,
  }));

  const getNotes = () => {
    if (session) {
      dispatch(actions.fetchNotesRequest({ session }));
    }
  };

  return {
    getNotes,
    session,
    ...notesState,
  };
};

export default useGetNotes;
