import { IButtonProps } from "./props";

export function Button({ content }: IButtonProps) {
    return <button className="px-10 py-2 rounded-lg bg-blue-600 text-white">{content}</button>;
}
