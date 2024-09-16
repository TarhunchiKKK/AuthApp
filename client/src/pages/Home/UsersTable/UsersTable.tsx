import { UserTableItem, Table } from "../../../components";
import { useAppSelector } from "../../../redux";
import { IUser } from "../../../types";
import { IUSersTableProps } from "./props";
import { UsersTableHeaders } from "./UsersTableHeaders";

export function UsersTable({ users, onSelectAllUsers }: IUSersTableProps) {
    const selectedUsersIds = useAppSelector((state) => state["users/selected"].ids);

    return (
        <div className="overflow-x-auto">
            <Table
                items={users}
                renderHeaders={() => (
                    <UsersTableHeaders
                        isCheckboxChecked={selectedUsersIds.length === users.length}
                        onSelectAllUsers={onSelectAllUsers}
                    />
                )}
                renderItem={(user: IUser) => <UserTableItem key={user.id} user={user} />}
            />
        </div>
    );
}
