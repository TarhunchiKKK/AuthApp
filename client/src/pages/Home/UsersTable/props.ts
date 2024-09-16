import { IUser } from "../../../types";

export interface IUSersTableProps {
    users: IUser[];
    onSelectAllUsers: () => void;
}

export interface IUsersTableHeadersProps {
    onSelectAllUsers: () => void;
    isCheckboxChecked: boolean;
}
