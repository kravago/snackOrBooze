import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Test NavBar component", () => {
    it("smoke test", () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
    });
})