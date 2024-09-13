import { useDispatch } from "react-redux";
import { selectOneUser, unselectOneUser, useAppSelector } from "../../redux";
import { IUserTableItemProps } from "./props";

export function UserTableItem({ user }: IUserTableItemProps) {
    const dispatch = useDispatch();
    const selectedUsersIds = useAppSelector((state) => state["users/selected"].ids);

    const isSelected = selectedUsersIds.includes(user.id);

    const handleSelect = () => {
        if (isSelected) {
            dispatch(unselectOneUser(user.id));
        } else {
            dispatch(selectOneUser(user));
        }
    };

    return (
        <tr className="table-row h-12 px-2 py-4 rounded-lg overflow-hidden hover:bg-slate-300 duration-300">
            <td className="table-cell">
                <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                    onChange={handleSelect}
                    defaultChecked={isSelected}
                />
            </td>
            <td className="table-cell">{user.id}</td>
            <td className="table-cell">{user.name}</td>
            <td className="table-cell">{user.email}</td>
            <td className="table-cell">{user.regiteredAt.getTime()}</td>
            <td className="table-cell">{user.lastLoginAt ? user.lastLoginAt.getTime() : "-"}</td>
            <td className="table-cell">{user.status}</td>
        </tr>
    );
}
