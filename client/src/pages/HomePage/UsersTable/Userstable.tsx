import { Table } from "../../../components/Table";
import { UserTableItem } from "../../../components/UserTableItem/UserTableItem";
import { IUser } from "../../../types";
import { IUSersTableProps } from "./props";
import { UsersTableHeaders } from "./UsersTableHeaders";

export function UsersTable({ users }: IUSersTableProps) {
    return (
        <div className="overflow-x-auto">
            <Table
                items={users}
                renderHeaders={UsersTableHeaders}
                renderItem={(user: IUser) => <UserTableItem key={user.id} user={user} />}
            />
        </div>
    );
}
