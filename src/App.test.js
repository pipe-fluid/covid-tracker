import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("Should render an input field.", () => {
		render(<App />);

		const inputField = screen.getByTestId("input-field");

		expect(inputField).toBeInTheDocument();
		// expect(inputField).toHaveAttribute("type", "input");
	});

	// it("Should render an input field.", () => {
	// 	render(<App />);

	// 	const inputField = screen.getByTestId("input-field");

	// 	expect(inputField).toBeInTheDocument();
	// 	// expect(inputField).toHaveAttribute("type", "input");
	// });
});
