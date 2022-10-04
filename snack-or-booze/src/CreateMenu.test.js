import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import CreateMenu from "./CreateMenu";

describe("Test CreateMenu component", () => {
    it("smoke test", () => {
        render(
            <MemoryRouter>
                <CreateMenu />
            </MemoryRouter>
        );
    });
})