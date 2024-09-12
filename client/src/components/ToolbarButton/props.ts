export interface IToolbarButtonProps {
    children: string | JSX.Element;

    title?: string;

    onClick: () => void;
}
