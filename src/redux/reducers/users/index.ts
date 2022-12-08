import { ActionsCreators } from "../../actions/notes";
import UsersActionsTypes from "../../actions/users/usersActions.types.d";
import InitialUsers from "./usersReducer.types";

const INITIAL_USERS: InitialUsers = {
  users: [],
  mostMentionedUsers: [],
  isLoading: false,
  isFetchingMostMentionedUsers: false,
  hasError: undefined,
  hasFetchingMostMentionedUsersError: undefined,
};

const usersReducer = (state = INITIAL_USERS, action: ActionsCreators) => {
  switch (action.type) {
    case UsersActionsTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        users: [],
        isLoading: true,
        hasError: undefined,
      };

    case UsersActionsTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
        hasError: false,
      };

    case UsersActionsTypes.FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    case UsersActionsTypes.FETCH_MOST_MENTIONED_REQUEST:
      return {
        ...state,
        mostMentionedUsers: [],
        isFetchingMostMentionedUsers: true,
        hasFetchingMostMentionedUsersError: undefined,
      };

    case UsersActionsTypes.FETCH_MOST_MENTIONED_SUCCESS:
      console.log('FETCH_MOST_MENTIONED_SUCCESS = ', action.payload.users)
      return {
        ...state,
        mostMentionedUsers: action.payload.users,
        isFetchingMostMentionedUsers: false,
        hasFetchingMostMentionedUsersError: false,
      };

    case UsersActionsTypes.FETCH_MOST_MENTIONED_ERROR:
      return {
        ...state,
        isFetchingMostMentionedUsers: false,
        hasFetchingMostMentionedUsersError: true,
      };

    default:
      return state;
  }
};

export default usersReducer;
