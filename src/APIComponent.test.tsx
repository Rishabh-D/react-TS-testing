import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import { APIComponent } from "./APIComponent";

const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
        return res(ctx.json({ name: "Jack" }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
    render(<APIComponent />);

    const out = await waitFor(() => screen.getByRole("contentinfo"));

    expect(out).toHaveTextContent("Name is Jack");
});

// So, in summary, you’re mocking HTTP requests using MSW,
// rendering your component with React Testing Library,
// waiting for the asynchronous data fetching to complete,
// and then asserting that the fetched data is correctly rendered by your component.
