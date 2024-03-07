import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { App } from "../src/App";
import { DIContainerProvider } from "../src/utils/DIContainerProvider";
import { DIContainerFactoryForTest } from "./utils/DiContainerFactory4Test";

describe("App", () => {
  it("navigates from home page to about page using MemoryRouter", async () => {
    // ARRANGE
    render(
      <DIContainerProvider factory={new DIContainerFactoryForTest()}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </DIContainerProvider>
    );

    // Ensure the page has loaded before interactions
    await waitFor(() => screen.getByRole("heading", { level: 1 }));

    // ASSERT initial page content
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Home");

    // ACT
    const user = userEvent.setup();
    await user.click(screen.getByText("About"));

    // ASSERT navigation outcome
    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        "About"
      );
    });
  });

  it("renders not found if invalid path", async () => {
    // ARRANGE
    render(
      <DIContainerProvider factory={new DIContainerFactoryForTest()}>
        <MemoryRouter initialEntries={["/some/bad/route"]}>
          <App />
        </MemoryRouter>
      </DIContainerProvider>
    );

    // ASSERT
    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        "Not Found"
      );
    });
  });
});
