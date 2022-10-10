import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import FoodMenu from "./FoodMenu";
import { drinks } from '../db.json';

describe("Test FoodMenu component", () => {

    it("smoke test for drinks", () => {
        render(
            <MemoryRouter>
                <FoodMenu items={ drinks } url="drinks" title="Drinks" />
            </MemoryRouter>
        );
    });

    it("smoke test for snacks", () => {
        render(
            <MemoryRouter>
                <FoodMenu items={ snacks } url="snacks" title="Snacks" />
            </MemoryRouter>
        );
    });
})