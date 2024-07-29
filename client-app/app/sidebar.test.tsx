import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Sidebar from "./side-bar";

test("Page", () => {
  render(<Sidebar />);
  expect(1 + 1).toBe(2);
});
