import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });
  // xit('renders button with correct text', () => {
  //   const { getByRole } = render(<App />);
  //   expect(getByRole("button")).toBeTruthy(); 
  // });
  // xit('calls correct function on click', () => {
  //   const onClick = jest.fn();
  //   const { getByText } = render(
  //     <App onClick={onClick} />
  //   );
  //   userEvent.click(getByText(defaultProps.text));
  //   expect(onClick).toHaveBeenCalled();
  // });
});