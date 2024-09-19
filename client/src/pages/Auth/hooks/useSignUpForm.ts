import { ChangeEvent, FormEvent, useState } from "react";
import { authApi } from "../../../api";
import { ISignUpDto } from "../interfaces";
import { useCredentails } from "../../../helpers";
import { ROUTES } from "../../../router";
import { useNavigate } from "react-router-dom";

export function useSignUpForm() {
    const [signUp, { error }] = authApi.useSignUpMutation();

    const { saveCredentails } = useCredentails();

    const navigate = useNavigate();

    const [formState, setFormState] = useState<ISignUpDto>({
        name: "",
        email: "",
        password: "",
    });

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, name: e.target.value });
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, email: e.target.value });
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, password: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const { data } = await signUp({ body: formState });
        if (data) {
            saveCredentails(data.user.id, data.access.access);
            navigate(ROUTES.HOME);
        }
    };

    return {
        formState,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        error,
    };
}
