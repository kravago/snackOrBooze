import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import FoodItem from "./FoodItem";
import { drinks, snacks } from '../db.json';

describe("Test FoodItem component", () => {
    it("smoke test for snacks", () => {
        render(
            <MemoryRouter>
                <FoodItem items={snacks} cantFind="/snacks"/>
            </MemoryRouter>
        );
    });

    it("smoke test for drinks", () => {
        render(
            <MemoryRouter>
                <FoodItem items={drinks} cantFind="/drinks"/>
            </MemoryRouter>
        );
    });
})