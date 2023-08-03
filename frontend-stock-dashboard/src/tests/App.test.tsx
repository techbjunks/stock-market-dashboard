import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  const renderApp = () => {
    return render(<App />);
  };

  test("renders Home component for the root path", () => {
    renderApp();
    const homeScreenCTA = screen.getByText("Home");
    expect(homeScreenCTA).toBeInTheDocument();
    const searchBtn = screen.getByRole("button", {
      name: "Search",
    });
    expect(searchBtn).toBeInTheDocument();
  });
  // TODO - Jest config needs to be done , jest.config.js for Vite project
});
