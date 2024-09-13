import { StrictMode } from "react";
import { HomePage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux";
import { SignInPage } from "./pages/Auth";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function App() {
    return (
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </StrictMode>
    );
}
