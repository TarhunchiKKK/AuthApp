import { ChangeEvent, FormEvent, useState } from "react";
import { ISignInDto } from "./interfaces";
import { Button, Input } from "../../components";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router";
import { authApi } from "../../api";
import { setToken } from "../../helpers";

export function SignInPage() {
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
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-6 border-[1px] border-slate-800 w-[300px] sm:w-[400px] lg:w-[650px]"
        >
            <h1 className="mb-4 font-bold text-black text-2xl">Sign In</h1>

            <div className="mb-6">
                <Input
                    label="Email:"
                    type="text"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={handleEmailChange}
                />
            </div>

            <div className="mb-6">
                <Input
                    label="Password:"
                    type="text"
                    placeholder="Enter your password"
                    value={formState.password}
                    onChange={handlePasswordChange}
                />
            </div>

            {error && <p className="text-red-600 text-lg mb-6">{error.toString()}</p>}

            <div className="flex flex-row justify-center mb-6">
                <Button content="Sing In" />
            </div>

            <div className="flex flex-row justify-center">
                <Link to={ROUTES.SIGN_UP} className="text-center text-blue-600">
                    Don't have an account
                </Link>
            </div>
        </form>
    );
}
