/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "../stories/atoms/input/checkbox/Checkbox";

describe("<Checkbox />", () => {
  it("renders without crashing", () => {
    render(<Checkbox readOnly checked={false} />);
  });

  it("displays the correct label", () => {
    const { getByText } = render(
      <Checkbox text="Checkbox label" readOnly checked={false} />
    );
    expect(getByText("Checkbox label")).toBeInTheDocument();
  });

  it('checkbox is checked when passed "checked" prop as true', () => {
    const { getByRole } = render(
      <Checkbox text="Checkbox label" readOnly checked={true} />
    );
    expect((getByRole("checkbox") as HTMLInputElement).checked).toEqual(true);
  });

  it('checkbox is unchecked when passed "checked" prop as false', () => {
    const { getByRole } = render(
      <Checkbox text="Checkbox label" readOnly checked={false} />
    );
    expect((getByRole("checkbox") as HTMLInputElement).checked).toEqual(false);
  });

  it('checkbox is disabled when mode is set to "disabled"', () => {
    const { getByRole } = render(
      <Checkbox
        text="Checkbox label"
        readOnly
        checked={false}
        disabled={true}
      />
    );
    expect((getByRole("checkbox") as HTMLInputElement).disabled).toEqual(true);
  });
});
