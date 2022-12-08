import { useEffect } from "react";
import useGetUsers from "../../../hooks/users/useGetUsers";

const UserDropdown = ({ hide, users, handleOptionClick }: any) => {
  const { getUsers, filterUsers, hasError } = useGetUsers();
  const handleClickOutside = (e: any) => {
    hide(false);
  };

  useEffect(() => {
    getUsers();
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hasError === false) {
      filterUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasError]);

  return (
    <div
      id="dropdownLeftStart"
      className="position: absolute top-0 z-20 w-80 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul
        className="py-1 text-xs text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownLeftStartButton"
      >
        {users.map((user: any) => (
          <li
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleOptionClick(user.username)}
          >
            {user.fullName} | @{user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDropdown;
