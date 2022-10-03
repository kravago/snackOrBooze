import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Test Home component", () => {
    it("smoke test", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
    });
})