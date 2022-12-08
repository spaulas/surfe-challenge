import { User } from "../../../api/users/types";

type InitialUsers = {
  users: User[];
  mostMentionedUsers: User[];
  isLoading: boolean;
  isFetchingMostMentionedUsers: boolean;
  hasError?: boolean;
  hasFetchingMostMentionedUsersError?: boolean;
};

export default InitialUsers;
