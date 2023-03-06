import React from "react";
import { render, screen } from "@testing-library/react";

import UseraccountsCreateDialogComponent from "../UseraccountsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders useraccounts create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UseraccountsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("useraccounts-create-dialog-component")).toBeInTheDocument();
});
