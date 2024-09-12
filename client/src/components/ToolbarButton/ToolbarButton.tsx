import { IToolbarButtonProps } from "./props";

export function ToolbarButton({ children, title, onClick }: IToolbarButtonProps) {
    return (
        <button
            className="flex-grow h-12 flex justify-center items-center hover:bg-slate-200 duration-300 border-r-2 last:border-r-0 border-slate-400"
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
}
