import { render, screen } from "@testing-library/react";
import Avatar from "../stories/atoms/avatar/Avatar";
import "@testing-library/jest-dom";

describe("Avatar Component", () => {
  test("renders correctly with initial content", () => {
    render(<Avatar content="DH" type="initial" size="sm" mode="round" />);

    const avatar = screen.getByText("DH");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass("text-xs text-center text-indigo-700 font-bold");
  });

  test("renders correctly with image content", () => {
    render(
      <Avatar
        content="../stories/assets/avatar.jpg"
        type="image"
        size="md"
        mode="square"
      />
    );

    const avatar = screen.getByAltText("avatar");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "../stories/assets/avatar.jpg");
    expect(avatar).toHaveClass("w-10 h-10 rounded left-0 top-0 absolute");
  });
});
