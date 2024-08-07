import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Sidebar from "./side-bar";

test("Renders sidebar with all routes", () => {
  render(<Sidebar />);
  const el = screen.getByText(/calendar/i);
  expect(el).toBeDefined();

  const li = screen.getAllByRole("listitem");
  expect(li.length).toEqual(10);
});
