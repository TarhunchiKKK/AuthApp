import { ChangeEvent } from "react";

export interface IInputProps {
    label: string;

    type: "text";

    placeholder: string;

    value: string;

    onChange: (_: ChangeEvent<HTMLInputElement>) => void;
}
