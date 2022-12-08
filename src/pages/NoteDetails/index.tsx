import { useEffect } from "react";
import ErrorState from "../../components/States/Error";
import LoadingState from "../../components/States/Loading";
import Details from "../../components/Notes/Details/index";
import useGetNoteDetails from "../../hooks/notes/useGetNoteDetails";

const NoteDetails = (): React.ReactElement => {
  const { getNoteById, body, isLoading, hasError } = useGetNoteDetails();

  useEffect(() => {
    getNoteById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  switch (true) {
    case isLoading:
      return <LoadingState />;
    case hasError:
      return <ErrorState />;
    default:
      return <Details body={body} />;
  }
};

export default NoteDetails;
