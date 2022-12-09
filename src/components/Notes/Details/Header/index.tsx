import { useEffect } from "react";
import { UserFromRequest } from "../../../../api/users/types";
import useGetNotes from "../../../../hooks/notes/useGetNotes";
import useGetMostMentionedUsers from "../../../../hooks/users/useGetMostMentionedUsers";
import { Props } from "./types.d";

const DetailsHeader = ({ setDraggingUser }: Props): React.ReactElement => {
  const { redirectToList } = useGetNotes();
  const { getMostMentionedUsers, mostMentionedUsers } =
    useGetMostMentionedUsers();

  useEffect(() => {
    getMostMentionedUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTagContent = (user: UserFromRequest) =>
    `${user.first_name} ${user.last_name} | @${user.username}`;

  return (
    <div className="note-details__header">
      <div className="note-details__mentioned-users-container">
        {mostMentionedUsers.map((user: UserFromRequest) => (
          <div
            className="note-details__mentioned-users-item text-xs"
            draggable="true"
            onDragStart={() => {
              setDraggingUser(user.username);
            }}
          >
            {createTagContent(user)}
          </div>
        ))}
      </div>
      <button onClick={() => redirectToList()}>Back</button>
    </div>
  );
};

export default DetailsHeader;
