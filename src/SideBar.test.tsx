import React from "react";
import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";

// This is a test suite for the SideBar component
test("renders a name", () => {
    // Define a set of items to be used as props for the SideBar component
    // Each item has a 'name' and 'href' property
    const items = [
        {
            name: "test",
            href: "/test",
        },
    ];

    // Render the SideBar component with the defined items as props
    // The render function renders a React element into the DOM and returns utility functions for testing the component
    render(<SideBar items={items} />);

    // Use the screen object to query for elements in the DOM
    // The getAllByRole function returns all elements that have the given role
    // In this case, it returns all elements with the role 'navigation'
    const anchorElements = screen.getAllByRole("navigation");

    // Expectations are assertions that something is true
    // In this case, it's asserting that the first anchor element has text content equal to the name of the first item
    expect(anchorElements[0]).toHaveTextContent(items[0].name);

    // This expectation is asserting that the first anchor element has an href attribute equal to the href of the first item
    expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
});
