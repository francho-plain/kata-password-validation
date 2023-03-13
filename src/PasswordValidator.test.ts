import {
  CapitalRule,
  LengthRule,
  LowerCaseRule,
  PasswordValidator,
} from "./PasswordValidator";

describe("PasswordValidator", () => {
  describe("LengthRule", () => {
    it.each([
      { password: "", expectedValue: false },
      { password: "1", expectedValue: false },
      { password: "12345678", expectedValue: false },
      { password: "123456789", expectedValue: true },
    ])("should validate password length", ({ password, expectedValue }) => {
      const rule = new LengthRule();

      const result = rule.isValid(password);

      expect(result).toBe(expectedValue);
    });
  });

  describe("CapitalRule", () => {
    it.each([
      { password: "", expectedValue: false },
      { password: "123456789", expectedValue: false },
      { password: "123456789a", expectedValue: false },
      { password: "12345678aA", expectedValue: true },
    ])("should validate capital letter", ({ password, expectedValue }) => {
      const rule = new CapitalRule();

      const result = rule.isValid(password);

      expect(result).toBe(expectedValue);
    });
  });

  describe("LowerCaseRule", () => {
    it.each([
      ["a", false],
      ["12345678Aa", true],
      ["12345678aa", true],
      ["123456789", false],
      ["123456789A", false],
    ])(
      `should validate capital letter %s`,
      (password: string, expectedValue: boolean) => {
        const rule = new LowerCaseRule();

        const result = rule.isValid(password);

        expect(result).toBe(expectedValue);
      }
    );
  });
});
