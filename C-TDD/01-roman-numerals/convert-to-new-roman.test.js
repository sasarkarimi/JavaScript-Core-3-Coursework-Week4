let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let input = 4;
  // Act
  let expected = "IV";
  // Assert
  let output = convertToNewRoman(input);
  expect(output).toEqual(expected);
});