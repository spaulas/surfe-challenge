import { useEffect } from "react";
import useGetMostMentionedUsers from "../../../../hooks/users/useGetMostMentionedUsers";

const DetailsHeader = ({ setDraggingUser }: any) => {
  const { getMostMentionedUsers, mostMentionedUsers } =
    useGetMostMentionedUsers();

  useEffect(() => {
    getMostMentionedUsers();

    window.addEventListener("drop", (e) => console.log("drop = ", e));
  }, []);

  return (
    <div className="note-details__header">
      <div>
        {mostMentionedUsers.map((user: any) => (
          <div
            id="draggable"
            draggable="true"
            onDragStart={() => {
              setDraggingUser(user.username);
            }}
          >{`${user.first_name} ${user.last_name} | @${user.username}`}</div>
        ))}
      </div>
      <button>Back</button>
    </div>
  );
};

export default DetailsHeader;
