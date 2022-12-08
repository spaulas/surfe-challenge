import { User } from "../../../api/users/types";

type InitialUsers = {
  users: User[];
  isLoading: boolean;
  hasError?: boolean;
};

export default InitialUsers;
