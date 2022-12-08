import { ValueOf } from "@type/global.d";
import UsersActionsTypes from "./usersActions.types";

const fetchUsersRequest = () => {
  return {
    type: UsersActionsTypes.FETCH_USERS_REQUEST,
  };
};

// TODO create typed for users
const fetchUsersSucceeded = (users: any) => ({
  type: UsersActionsTypes.FETCH_USERS_SUCCESS,
  payload: { users },
});

const fetchUsersFailed = (error: any) => ({
  type: UsersActionsTypes.FETCH_USERS_ERROR,
  payload: { error },
});

const fetchMostMentionedUsersRequest = () => {
  return {
    type: UsersActionsTypes.FETCH_MOST_MENTIONED_REQUEST,
  };
};

const fetchMostMentionedUsersSucceeded = (users: any) => ({
  type: UsersActionsTypes.FETCH_MOST_MENTIONED_SUCCESS,
  payload: { users },
});

const fetchMostMentionedUsersFailed = (error: any) => ({
  type: UsersActionsTypes.FETCH_MOST_MENTIONED_ERROR,
  payload: { error },
});

const actionsCreators = Object.freeze({
  fetchUsersRequest,
  fetchUsersSucceeded,
  fetchUsersFailed,
  fetchMostMentionedUsersRequest,
  fetchMostMentionedUsersSucceeded,
  fetchMostMentionedUsersFailed,
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;
