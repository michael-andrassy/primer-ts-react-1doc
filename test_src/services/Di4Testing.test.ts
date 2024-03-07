import { describe, it, expect } from "vitest";

import { DIContainerFactoryForTest } from "@tests/utils/DiContainerFactory4Test";

import { ServiceX } from "@services/ServiceX";

describe("Dependency injection in testing", () => {
  it("ServiceX injects ServiceYTestImpl in testing", () => {
    const testContainer = new DIContainerFactoryForTest().createContainer();
    const serviceX = testContainer.get<ServiceX>("ServiceX");
    expect(serviceX.getTestMessage()).toBe("Hello Mars");
  });
});
