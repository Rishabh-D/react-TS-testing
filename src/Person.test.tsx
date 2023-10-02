import React from "react";
import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

test("renders a name", () => {
    //render
    render(<Person name="Rishabh" />);

    // grab the element and value
    const divElement = screen.getByRole("contentinfo");

    // check

    expect(divElement).toHaveTextContent("Name is Rishabh");
});
