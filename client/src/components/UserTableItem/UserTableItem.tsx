import { useDispatch } from "react-redux";
import { selectOneUser, unselectOneUser, useAppSelector } from "../../redux";
import { IUserTableItemProps } from "./props";
import { formatDate } from "../../helpers";

export function UserTableItem({ user }: IUserTableItemProps) {
    const dispatch = useDispatch();
    const isSelected = useAppSelector((state) => state["users/selected"].ids).includes(user.id);

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
                    checked={isSelected}
                    defaultChecked={isSelected}
                />
            </td>
            <td className="table-cell">{user.id}</td>
            <td className="table-cell">{user.name}</td>
            <td className="table-cell">{user.email}</td>
            <td className="table-cell">{formatDate(user.regiteredAt)}</td>
            <td className="table-cell">{user.lastLoginAt ? formatDate(user.lastLoginAt) : "-"}</td>
            <td className="table-cell">{user.status}</td>
        </tr>
    );
}
