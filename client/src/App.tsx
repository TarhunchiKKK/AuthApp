import { StrictMode } from "react";
import { HomePage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux";

export function App() {
    return (
        <StrictMode>
            <Provider store={store}>
                <HomePage />
            </Provider>
        </StrictMode>
    );
}
