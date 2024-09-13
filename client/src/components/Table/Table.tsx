import { ITableProps } from "./props";

type ObjWithId = {
    id: string | number;
};

export function Table<TItem extends ObjWithId>({
    items,
    renderItem,
    renderHeaders,
}: ITableProps<TItem>) {
    return (
        <table className="w-full min-w-[1024px]">
            {renderHeaders()}
            <tbody>{items.map(renderItem)}</tbody>
        </table>
    );
}
