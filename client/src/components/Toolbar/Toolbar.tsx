import { IToolbarProps } from "./props";

export function Toolbar({ children }: IToolbarProps) {
    return (
        <div className="mx-auto flex flex-row border-2 border-slate-400 rounded-xl overflow-hidden">
            {children}
        </div>
    );
}
