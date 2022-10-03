import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import App from "./App";

describe("Test App component", () => {
    it("smoke test", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
    });
})