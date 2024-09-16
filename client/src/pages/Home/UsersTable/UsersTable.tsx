import { UserTableItem, Table } from "../../../components";
import { IUser } from "../../../types";
import { IUSersTableProps } from "./props";
import { UsersTableHeaders } from "./UsersTableHeaders";

export function UsersTable({ users, onSelectAllUsers }: IUSersTableProps) {
    return (
        <div className="overflow-x-auto">
            <Table
                items={users}
                renderHeaders={() => <UsersTableHeaders onSelectAllUsers={onSelectAllUsers} />}
                renderItem={(user: IUser) => <UserTableItem key={user.id} user={user} />}
            />
        </div>
    );
}
