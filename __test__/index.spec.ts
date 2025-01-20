import { expect, it } from "vitest";

import { prettierrc } from "..";

it(`Should get prettierrc configuration`, () => {
  expect(prettierrc).toBeTruthy();
  expect(prettierrc).toMatchSnapshot();
});
