import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import FoodMenu from "./FoodMenu";

describe("Test FoodMenu component", () => {
    it("smoke test", () => {
        render(
            <MemoryRouter>
                <FoodMenu />
            </MemoryRouter>
        );
    });
})