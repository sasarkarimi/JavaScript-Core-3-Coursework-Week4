let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let input = 4;
  // Act
  let expected = "IIII";
  // Assert
  let output = convertToOldRoman(input);
  expect(output).toEqual(expected);
});