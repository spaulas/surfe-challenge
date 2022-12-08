import { ActionsCreators } from "@actions/notes";
import UsersActionsTypes from "@actions/users/usersActions.types";
import InitialUsers from "./usersReducer.types";

const INITIAL_USERS: InitialUsers = {
  users: [],
  isLoading: false,
  hasError: false,
};

const usersReducer = (state = INITIAL_USERS, action: ActionsCreators) => {
  switch (action.type) {
    case UsersActionsTypes.FETCH_USERS_REQUEST:
    case UsersActionsTypes.FETCH_MOST_MENTIONED_REQUEST:
      return {
        ...state,
        users: [],
        isLoading: true,
        hasError: false,
      };

    case UsersActionsTypes.FETCH_USERS_SUCCESS:
    case UsersActionsTypes.FETCH_MOST_MENTIONED_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
        hasError: false,
      };

    case UsersActionsTypes.FETCH_USERS_ERROR:
    case UsersActionsTypes.FETCH_MOST_MENTIONED_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    default:
      return state;
  }
};

export default usersReducer;
