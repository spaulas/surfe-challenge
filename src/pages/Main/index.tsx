import { useEffect } from "react";
import NotesList from "../../components/Notes/List";
import EmptyState from "../../components/States/Empty";
import ErrorState from "../../components/States/Error";
import LoadingState from "../../components/States/Loading";
import useGetNotes from "../../hooks/notes/useGetNotes";
import { useHistory } from "react-router-dom";

const Main = (): React.ReactElement => {
  const history = useHistory();
  const { getNotes, notes, isLoading, hasError, session } = useGetNotes();

  // TODO check this is doing 2 requests
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToNote = () => {
    console.log("session = ", session);
    history.push(`${session}/notes`);
  };

  switch (true) {
    case isLoading:
      return <LoadingState />;
    case hasError:
      return <ErrorState />;
    case notes.length === 0:
      return (
        <EmptyState
          title="There are no notes"
          buttonTitle="Create new note"
          onClick={redirectToNote}
        />
      );
    default:
      return <NotesList notes={notes} />;
  }
};

export default Main;
