import { useDispatch } from "react-redux";
import { usersApi } from "../../../api";
import { unselectAllUsers, useAppSelector } from "../../../redux";
import { UserStatus } from "../../../types";
import { useCredentails, useLogout } from "../../../helpers";

export function useToolbarActions() {
    const [changeUsersStatus] = usersApi.useChangeUsersStatusMutation();
    const [removeMultipleUsers] = usersApi.useRemoveMultipleUsersMutation();

    const { token, currentUserId } = useCredentails();

    const logout = useLogout();

    const headers = {
        Authorization: token,
    };

    const dispatch = useDispatch();
    const selectedUsersIds = useAppSelector((state) => state["users/selected"].ids);

    const handleUnblockUsers = () => {
        changeUsersStatus({
            headers,
            body: {
                status: UserStatus.Active,
                users: selectedUsersIds.map((id) => ({
                    id,
                })),
            },
        });

        dispatch(unselectAllUsers());
    };

    const handleBlockUsers = () => {
        if (selectedUsersIds.includes(currentUserId)) {
            logout();
        }

        changeUsersStatus({
            headers,
            body: {
                status: UserStatus.Blocked,
                users: selectedUsersIds.map((id) => ({
                    id,
                })),
            },
        });

        dispatch(unselectAllUsers());
    };

    const handleRemoveUsers = () => {
        removeMultipleUsers({
            headers,
            body: {
                users: selectedUsersIds.map((id) => ({
                    id,
                })),
            },
        });

        dispatch(unselectAllUsers());
    };

    return { handleUnblockUsers, handleBlockUsers, handleRemoveUsers };
}
