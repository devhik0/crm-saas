import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Theme from "./theme";

test("Renders themes", () => {
  const el = render(<Theme />);
  expect(el).toBeDefined();
});
