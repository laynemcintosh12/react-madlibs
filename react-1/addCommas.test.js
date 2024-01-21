const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it converts a number to string with commas", () => {
    expect(addCommas(1000)).toBe("1,000");
    expect(addCommas(12345)).toBe("12,345");
    expect(addCommas(1234567890)).toBe("1,234,567,890");
  });

  test("it handles decimal numbers", () => {
    expect(addCommas(1000.123)).toBe("1,000.123");
    expect(addCommas(12345.678)).toBe("12,345.678");
  });

  test("it handles negative numbers", () => {
    expect(addCommas(-1000)).toBe("-1,000");
    expect(addCommas(-12345)).toBe("-12,345");
  });

  test("it handles single/ double digit numbers", () => {
    expect(addCommas(5)).toBe("5");
    expect(addCommas(14)).toBe("14");
  });
});
