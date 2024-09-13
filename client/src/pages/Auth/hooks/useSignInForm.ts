import { ChangeEvent, FormEvent, useState } from "react";
import { authApi } from "../../../api";
import { ISignInDto } from "../interfaces";
import { setToken } from "../../../helpers";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router";

export function useSignInForm() {
    const navigate = useNavigate();

    const [signIn, { error }] = authApi.useSignInMutation();
    const [formState, setFormState] = useState<ISignInDto>({
        email: "",
        password: "",
    });

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, email: e.target.value });
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, password: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const { data: token } = await signIn({ body: formState });
        if (token) {
            setToken(token);
        }

        navigate(ROUTES.HOME);
    };

    return {
        formState,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        error,
    };
}
