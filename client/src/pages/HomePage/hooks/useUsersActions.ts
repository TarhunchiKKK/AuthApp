import { useDispatch } from "react-redux";
import { usersApi } from "../../../api/users";
import { unselectAllUsers, useAppSelector } from "../../../redux";
import { UserStatus } from "../../../types";

export function useUsersActions(token: string) {
    const headers = {
        Authorization: token,
    };

    const dispatch = useDispatch();
    const selectedUsersIds = useAppSelector((state) => state["users/selected"].ids);

    const [changeUsersStatus] = usersApi.useChangeUsersStatusMutation();
    const [removeMultipleUsers] = usersApi.useRemoveMultipleUsersMutation();

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
