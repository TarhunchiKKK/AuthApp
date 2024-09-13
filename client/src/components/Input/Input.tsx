import { IInputProps } from "./props";

export function Input({ label, ...inputProps }: IInputProps) {
    return (
        <>
            <label className="block mb-">{label}</label>
            <input
                className="w-full border-none outline-none px-2 py-2 text-lg bg-gray-200"
                {...inputProps}
            />
        </>
    );
}
