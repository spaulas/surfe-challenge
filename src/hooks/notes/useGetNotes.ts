import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/notes";
import { useHistory, useParams } from "react-router-dom";
import { RootReducerState } from "../../type/global";

const useGetNotes = () => {
  const { session } = useParams<{ session: string }>();
  const dispatch = useDispatch();
  const history = useHistory();

  const notesState = useSelector(({ Notes }: RootReducerState) => ({
    notes: Notes.notes,
    isLoading: Notes.isLoading,
    hasError: Notes.hasError,
  }));

  const getNotes = () => {
    console.log( 'getNotes session = ', session)
    if (session) {
      dispatch(actions.fetchNotesRequest({ session }));
    }
  };

  const redirectToList = () => {
    history.push(`/${session}`);
  };

  return {
    getNotes,
    redirectToList,
    session,
    ...notesState,
  };
};

export default useGetNotes;
