import { render } from "@testing-library/react";
import { test } from "vitest";
import Theme from "./theme";

test("Renders theme", () => {
  render(<Theme />);
});
