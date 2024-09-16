import { Button } from "../../components";
import { useLogout } from "../../helpers";
import { useToolbarActions, useUsers } from "./hooks";
import { UserActionsToolbar } from "./UserActiansToolbar";
import { UsersTable } from "./UsersTable";

export function HomePage() {
    const { handleUnblockUsers, handleBlockUsers, handleRemoveUsers } = useToolbarActions();
    const { users, handleSelectAllUsers } = useUsers();

    const logout = useLogout();

    return (
        <main className="py-4 px-4 md:px-0">
            <div className="container mx-auto">
                <div className="mb-8 flex flex-row justify-end">
                    <Button content="Logout" onClick={logout} />
                </div>

                <UserActionsToolbar
                    onUnblock={handleUnblockUsers}
                    onBlock={handleBlockUsers}
                    onDlete={handleRemoveUsers}
                />

                {users && <UsersTable onSelectAllUsers={handleSelectAllUsers} users={users} />}
            </div>
        </main>
    );
}
