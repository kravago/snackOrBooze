import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import FoodItem from "./FoodItem";

describe("Test FoodItem component", () => {
    it("smoke test", () => {
        render(
            <MemoryRouter>
                <FoodItem />
            </MemoryRouter>
        );
    });
})