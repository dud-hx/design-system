import { render, fireEvent } from "@testing-library/react";
import Button from "../stories/atoms/buttons/Button";

test("renders button and handles click", () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <Button label="Click me" onClick={handleClick} />
  );

  fireEvent.click(getByText("Click me"));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
