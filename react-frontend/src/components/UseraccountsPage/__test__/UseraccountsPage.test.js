import React from "react";
import { render, screen } from "@testing-library/react";

import UseraccountsPage from "../UseraccountsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders useraccounts page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UseraccountsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("useraccounts-datatable")).toBeInTheDocument();
    expect(screen.getByRole("useraccounts-add-button")).toBeInTheDocument();
});
