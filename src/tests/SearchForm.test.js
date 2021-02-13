import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

const validProps = {
  searchText: "test search",
  setSearchText: jest.fn(),
  onSubmit: jest.fn(),
};

describe("It renders correctly", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<SearchForm {...validProps} />);
    expect(asFragment).toMatchSnapshot();
  });
});
