import React from "react";
import { render, screen } from "@testing-library/react";

import ItemcatalogPage from "../ItemcatalogPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders itemcatalog page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ItemcatalogPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("itemcatalog-datatable")).toBeInTheDocument();
    expect(screen.getByRole("itemcatalog-add-button")).toBeInTheDocument();
});
