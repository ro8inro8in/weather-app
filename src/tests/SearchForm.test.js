import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";
import userEvent from "@testing-library/user-event";

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
  it('button fires the search event', ()=>{
    const { getByRole } = render(<SearchForm {...validProps} />);
    const button = getByRole('button');
    userEvent.click(button);
    expect(validProps.onSubmit).toHaveBeenCalled();
  })
});
