import { FaCheck } from "react-icons/fa6";
import { Toolbar, ToolbarButton } from "../../../components";
import { IUserActiansToolbar } from "./props";
import { MdBlock } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

export function UserActionsToolbar({ onUnblock, onBlock, onDlete }: IUserActiansToolbar) {
    return (
        <div className="mb-10">
            <Toolbar>
                <ToolbarButton title="Unblock" onClick={onUnblock}>
                    <FaCheck size={24} />
                </ToolbarButton>

                <ToolbarButton title="Block" onClick={onBlock}>
                    <MdBlock size={24} />
                </ToolbarButton>

                <ToolbarButton title="Delete" onClick={onDlete}>
                    <TiDeleteOutline size={24} />
                </ToolbarButton>
            </Toolbar>
        </div>
    );
}
