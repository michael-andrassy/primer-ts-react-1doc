import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { App } from "../src/App";
import { DIContainerProvider } from "../src/utils/DIContainerProvider";
import { DIContainerFactoryForTest } from "./utils/DiContainerFactory4Test";

describe("App", () => {
  it("passes smoke-test", async () => {
    // ARRANGE
    render(
      <DIContainerProvider factory={new DIContainerFactoryForTest()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </DIContainerProvider>
    );

    // ASSERT
    await waitFor(() => {
      // Check for heading text
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        "Home"
      );

      // Find the embedded SVG within a specific container
      const svgContainer = document.querySelector(".inline-svg-container svg");
      expect(svgContainer).toBeInTheDocument();

      // Check for HTML table presence
      expect(screen.getByRole("table")).toBeInTheDocument();

      // Check for HTML table has a container <div> that has a class - this refers to the correct fuctioning of SASS
      const divWithClassContainingTable = screen
        .getByRole("table")
        .closest("div");
      expect(divWithClassContainingTable).toHaveAttribute("class");
      expect(divWithClassContainingTable).not.toHaveAttribute("class", "");

      // Check for the build timestamp
      // Find the <p> element by its class name
      expect(
        screen.getByText((content, element) => {
          // Check if element is not null or undefined
          if (!element) return false;

          return (
            element.tagName.toLowerCase() === "p" &&
            element.classList.contains("project-build-timestamp") &&
            content.trim() !== "" &&
            !content.includes("ERR")
          );
        })
      ).toBeInTheDocument();
    }); //await
  }); //it
}); //describe
