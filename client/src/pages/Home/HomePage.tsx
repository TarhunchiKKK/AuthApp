import { useNavigate } from "react-router-dom";
import { usersApi } from "../../api";
import { Button } from "../../components";
import { removeToken } from "../../helpers";
import { useUsersActions } from "./hooks";
import { UserActiansToolbar } from "./UserActiansToolbar";
import { UsersTable } from "./UsersTable";
import { ROUTES } from "../../router";

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM1MmUyNTdmLTdjMzAtNGEzOC1iNjBkLWVjZThmMzI3NGE3YyIsIm5hbWUiOiJOaWtvbGFpIiwiZW1haWwiOiJzbW9sZW5za2lAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkYXJnb24yaWQkdj0xOSRtPTY1NTM2LHQ9MyxwPTQkdHpzTmxKeXI1YnRoNmE5K2dDK1pqQSRlSGZhVWh2UlJuK1RzU28xNHlub0dvMGViNnIzc0ZSRUU1RnJCQnRhQ2xvIiwiaWF0IjoxNzI2MjExNDAzLCJleHAiOjE3Mjg4MDM0MDN9.-2X2sHG1rMdres5TMBfJOi7SCx9Zc4KSh9C2R3aCgu8";

const headers = {
    Authorization: token,
};
export function HomePage() {
    const navigate = useNavigate();

    const { data: users } = usersApi.useGetAllUsersQuery({ headers });
    const { handleUnblockUsers, handleBlockUsers, handleRemoveUsers } = useUsersActions(token);

    const handleLogout = () => {
        removeToken();
        navigate(ROUTES.SIGN_IN);
    };

    return (
        <main className="py-4 px-4 md:px-0">
            <div className="container mx-auto">
                <div className="mb-8 flex flex-row justify-end">
                    <Button content="Logout" onClick={handleLogout} />
                </div>

                <UserActiansToolbar
                    onUnblock={handleUnblockUsers}
                    onBlock={handleBlockUsers}
                    onDlete={handleRemoveUsers}
                />

                {users && <UsersTable users={users} />}
            </div>
        </main>
    );
}
