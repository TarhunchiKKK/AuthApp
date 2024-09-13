export interface ITableProps<TItem> {
    items: TItem[];

    renderItem: (item: TItem) => JSX.Element;

    renderHeaders: () => JSX.Element;
}
