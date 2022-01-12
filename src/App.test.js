import { render, screen } from "@testing-library/react";
import * as CovidApi from "./covid-api";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render an input field.", () => {
    render(<App />);

    const inputField = screen.getByTestId("input-field");

    expect(inputField).toBeInTheDocument();
  });

  it("Should render a list of countries.", async () => {
    // ARRANGE
    const retrievedData = {
      locations: [
        { id: 0, country: "Brazil" },
        { id: 1, country: "Canada" },
      ],
    };

    jest
      .spyOn(CovidApi, "getAllCountries")
      .mockResolvedValueOnce(retrievedData);

    // ACT
    render(<App />);

    const countriesList = await screen.findByTestId("countries-list");

    // ASSERT
    expect(countriesList.childNodes[0]).toHaveTextContent("Brazil");
    expect(countriesList.childNodes[1]).toHaveTextContent("Canada");
  });
});
