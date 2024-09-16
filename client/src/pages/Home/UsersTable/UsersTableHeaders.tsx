import { IUsersTableHeadersProps } from "./props";

export function UsersTableHeaders({ onSelectAllUsers }: IUsersTableHeadersProps) {
    return (
        <thead>
            <tr>
                <th className="text-left">
                    <input
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer"
                        onChange={onSelectAllUsers}
                        defaultChecked={false}
                    />
                </th>
                <th className="text-left">Id</th>
                <th className="text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Register at</th>
                <th className="text-left">Last login at</th>
                <th className="text-left">Status</th>
            </tr>
        </thead>
    );
}
