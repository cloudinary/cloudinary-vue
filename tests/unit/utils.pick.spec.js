import { pick } from "../../src/utils";

describe("pick", () => {
  it("picks empty", () => {
    expect(pick({ a: 1 }, [])).toEqual({});
  });
  it("picks from wider set", () => {
    expect(
      pick({ a: 1, details: "devil" }, [
        "0",
        "a",
        "b",
        "c",
        "d",
        "e",
        "asdsdasdas"
      ])
    ).toEqual({ a: 1 });
  });
  it("picks from narrow set", () => {
    expect(
      pick(
        {
          qaz: true,
          wsx: true,
          edc: true,
          rfv: true,
          tgb: true,
          yhn: true,
          ujm: true,
          ik: true,
          ol: true,
          p: true
        },
        ["tgb", "ol"]
      )
    ).toEqual({
      tgb: true,
      ol: true
    });
  });
});
