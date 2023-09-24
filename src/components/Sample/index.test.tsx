import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Sample } from ".";

test("title is render", () => {
    render(<Sample />);
    screen.debug();
    const SampleElement = screen.getByText(/Sample/);
    expect(SampleElement).toBeInTheDocument();
});
