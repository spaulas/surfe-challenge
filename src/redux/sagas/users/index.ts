import { all, put, takeLatest, call } from "redux-saga/effects";
import UsersActionTypes from "../../actions/users/usersActions.types.d";
import actions from "../../actions/users";
import {
  fetchUsersAPIRequest,
  fetchMostMentionedUsersAPIRequest,
} from "../../../api/users";

export function* fetchUsersAsync(): any {
  try {
    const response = yield call(fetchUsersAPIRequest);
    const cleanUsers = response.map((user: any) => ({
      username: user.username,
      fullName: `${user.first_name} ${user.last_name}`,
    }));
    yield put(actions.fetchUsersSucceeded(cleanUsers));
  } catch (error) {
    yield put(actions.fetchUsersFailed(error));
  }
}

export function* fetchMostMentionedUsersAsync(): any {
  try {
    const response = yield call(fetchMostMentionedUsersAPIRequest);
    console.log('response = ', response)
    yield put(actions.fetchMostMentionedUsersSucceeded(response));
  } catch (error) {
    yield put(actions.fetchMostMentionedUsersFailed(error));
  }
}

export default function* sagaCollections() {
  yield all([
    takeLatest(UsersActionTypes.FETCH_USERS_REQUEST, fetchUsersAsync),
    takeLatest(
      UsersActionTypes.FETCH_MOST_MENTIONED_REQUEST,
      fetchMostMentionedUsersAsync
    ),
  ]);
}
