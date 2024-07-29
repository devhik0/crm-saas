import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Sidebar from "./side-bar";

test("Renders sidebar", () => {
  const el = render(<Sidebar />);
  expect(el).toBeDefined();
});
