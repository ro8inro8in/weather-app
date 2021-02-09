import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
    const validProps = {
      date: 11111111,
      humidity: 100,
      temperature: {
        min: 12,
        max: 22,
      },
      wind: {
        speed: 100,
        direction: "nw",
      },
    };
  
    it("renders correctly", () => {
        const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});