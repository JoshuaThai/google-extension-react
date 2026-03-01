import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App.jsx";

test("Addition working", () => {
    expect(1 + 1).toBe(2);
});

test("renders App component", () => {
    // Render the App component
  render(<App />);
  // Check if Google Extension text is displayed
  expect(screen.getByText("Google Extension:")).toBeInTheDocument();
});

// test("renders auth message", () => {
//     render(<App />);
//     expect(screen.getByText("Auth ready: Yes")).toBeInTheDocument();
// });

test("renders Counter component", () => {
    render(<App />);
    expect(screen.getByText("Counter is even")).toBeInTheDocument();
});

// Test a button click that triggers an alert and check the alert message
test("renders Display component", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<App />);
    
    // Searches for a button with the name "Click me!" and simulates a click event on it
    fireEvent.click(screen.getByRole("button", { name: "Click me!" }));

    expect(alertMock).toHaveBeenCalledWith("Hello, I am under the water. Please send help!");

    alertMock.mockRestore();
});