import { ChangeEvent, FormEvent, useState } from "react";
import { authApi } from "../../../api";
import { ISignInDto } from "../interfaces";
import { useCredentails } from "../../../helpers";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router";

export function useSignInForm() {
    const [signIn, { error }] = authApi.useSignInMutation();
    // const [error, setError] = useState<string>("");

    const { saveCredentails } = useCredentails();

    const navigate = useNavigate();

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

        const { data } = await signIn({ body: formState });
        if (data) {
            saveCredentails(data.user.id, data.access.access);
            navigate(ROUTES.HOME);
        }
    };

    console.log(error);

    return {
        formState,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        error,
    };
}
