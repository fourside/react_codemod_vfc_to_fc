// @ts-ignore
import { defineTest } from "jscodeshift/dist/testUtils";

describe("VFC should be converted to FC", () => {
  defineTest(__dirname, "transform", null, "vfc-to-fc", { parser: "tsx" });
});
