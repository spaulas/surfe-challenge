import { useEffect } from "react";
import ErrorState from "../../components/States/Error";
import LoadingState from "../../components/States/Loading";
import NoteDetails from "../../components/Notes/Details/index";
import useGetNoteDetails from "../../hooks/notes/useGetNoteDetails";

const Details = (): React.ReactElement => {
  const { getNoteById, body, id, isLoading, hasError } = useGetNoteDetails();

  useEffect(() => {
    console.log("getNotes DETAISL");
    getNoteById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  switch (true) {
    case isLoading:
      return <LoadingState />;
    case hasError:
      return <ErrorState />;
    default:
      return <NoteDetails body={body} id={id} />;
  }
};

export default Details;
