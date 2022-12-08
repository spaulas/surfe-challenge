import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/users";
import { RootReducerState } from "../../type/global";


const useGetMostMentionedUsers = () => {
  const dispatch = useDispatch();

  const usersState = useSelector(({ Users }: RootReducerState) => ({
    mostMentionedUsers: Users.mostMentionedUsers,
    isLoading: Users.isFetchingMostMentionedUsers,
    hasError: Users.hasFetchingMostMentionedUsersError,
  }));

  const getMostMentionedUsers = () => {
    dispatch(actions.fetchMostMentionedUsersRequest());
  };

  console.log('usersState = ', usersState)


  return {
    getMostMentionedUsers,
    mostMentionedUsers: usersState.mostMentionedUsers,
    isLoading: usersState.isLoading,
    hasError: usersState.hasError,
  };
};

export default useGetMostMentionedUsers;
