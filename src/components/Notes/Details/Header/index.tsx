import { useEffect } from "react";
import useGetNotes from "../../../../hooks/notes/useGetNotes";
import useGetMostMentionedUsers from "../../../../hooks/users/useGetMostMentionedUsers";

const DetailsHeader = ({ setDraggingUser }: any) => {
  /* const { redirectToList } = useGetNotes(); */
  const { getMostMentionedUsers, mostMentionedUsers } =
    useGetMostMentionedUsers();

  useEffect(() => {
    getMostMentionedUsers();
  }, []);

  return (
    <div className="note-details__header">
      <div className="note-details__mentioned-users-container">
        {mostMentionedUsers.map((user: any) => (
          <div
            className="note-details__mentioned-users-item text-xs"
            draggable="true"
            onDragStart={() => {
              setDraggingUser(user.username);
            }}
          >{`${user.first_name} ${user.last_name} | @${user.username}`}</div>
        ))}
      </div>
      {/* <button onClick={() => redirectToList()}>Back</button> */}
    </div>
  );
};

export default DetailsHeader;
