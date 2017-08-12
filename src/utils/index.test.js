import { translate } from "./";

it("translates", () => {
  expect(translate("ababa", "a", { a: "z" })).toBe("zbzbz");
  expect(translate("ababa", 1, { 1: "z" })).toBe("ababa");
  expect(translate("ababa", "a", {})).toBe("ababa");
  expect(translate("ababa", "a")).toBe("ababa");
  expect(translate("ababa")).toBe("ababa");
  expect(translate()).toBe(null);
  expect(translate("ababa", ["a", "b"], { a: "z", b: "x" })).toBe("zxzxz");
  expect(translate("ababa", ["a", "b"], { a: "z" })).toBe("zbzbz");
  expect(translate("ababa", [], { a: "z" })).toBe("ababa");
  expect(translate("D = Δ", "D", { D: "Δ"})).toBe("Δ = Δ");
});
