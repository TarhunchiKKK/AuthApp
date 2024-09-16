import { useDispatch } from "react-redux";
import { usersApi } from "../../../api";
import { useCredentails } from "../../../helpers";
import { unselectAllUsers, useAppSelector } from "../../../redux";
import { selectManyUsers } from "../../../redux/selected-users";

export function useUsers() {
    const { token } = useCredentails();
    const { data: users } = usersApi.useGetAllUsersQuery({
        headers: {
            Authorization: token,
        },
    });

    const dispatch = useDispatch();
    const selectedUsersIds = useAppSelector((state) => state["users/selected"].ids);

    const handleSelectAllUsers = () => {
        if (users) {
            if (users.length === selectedUsersIds.length) {
                console.log("1");
                dispatch(unselectAllUsers());
            } else {
                console.log("2");
                dispatch(selectManyUsers(users));
            }
        }
    };

    return {
        users,
        handleSelectAllUsers,
    };
}
