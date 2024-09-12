import { MdBlock } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";

import { Toolbar, ToolbarButton } from "../components";

export function HomePage() {
    return (
        <main className="py-4 px-4 md:px-0">
            <div className="container mx-auto">
                <Toolbar>
                    <ToolbarButton title="Unblock" onClick={() => {}}>
                        <FaCheck size={24} />
                    </ToolbarButton>

                    <ToolbarButton title="Block" onClick={() => {}}>
                        <MdBlock size={24} />
                    </ToolbarButton>

                    <ToolbarButton title="Delete" onClick={() => {}}>
                        <TiDeleteOutline size={24} />
                    </ToolbarButton>
                </Toolbar>
            </div>
        </main>
    );
}
