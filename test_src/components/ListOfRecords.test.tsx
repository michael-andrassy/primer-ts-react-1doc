import { describe, it } from "vitest";
import { render, screen, within, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { DIContainerFactoryForTest } from "@tests/utils/DiContainerFactory4Test";

import ListOfRecords from "@components/ListOfRecords";
import { DIContainerProvider } from "@utils/DIContainerProvider";

describe("ListOfRecords", () => {
  it("Renders a table", async () => {
    //ARRANGE
    // wrapped in Act() because the component will switch from loading to presenting data
    act(() => {
      render(
        <DIContainerProvider factory={new DIContainerFactoryForTest()}>
          <ListOfRecords />
        </DIContainerProvider>,
        {}
      );
    });
    //EXPECT
    await waitFor(
      () => {
        // Wait for a specific condition to be true
        expect(screen.getByRole("table")).toBeInTheDocument();
      },
      {
        timeout: 1000, //milliseconds
      }
    );

    //ACT
  });
  it("Gets the test-variant of ServiceY injected", async () => {
    //ARRANGE
    // wrapped in Act() because the component will switch from loading to presenting data
    act(() => {
      render(
        <DIContainerProvider factory={new DIContainerFactoryForTest()}>
          <ListOfRecords />
        </DIContainerProvider>,
        {}
      );
    });
    //EXPECT
    await waitFor(
      () => {
        // Wait for a specific condition to be true
        expect(screen.getByRole("table")).toBeInTheDocument();
      },
      {
        timeout: 1000, //milliseconds
      }
    );
    const tdElement = within(screen.getByRole("table")).getByText(
      "UnitTestBType"
    );
    expect(tdElement).toBeInTheDocument();
    expect(tdElement.tagName).toBe("TD");
    //ACT
  });
});
