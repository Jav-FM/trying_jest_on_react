import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    // The exact: false allows to pass without the '!'
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you!' if the button was not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const goodToSeeYoutextElement = screen.getByText("It's good to see you!");
    expect(goodToSeeYoutextElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();
  });

  test("don't renders 'It's good to see you!' if the button was clicked", async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    //queryByText gives null when element doesnt exist (getByText Throw an error if that's de case)
    const changedTextElement = screen.queryByText("It's good to see you!");
    expect(changedTextElement).toBeNull();
  });
});
