const { assertArrayEqual } = require("./assertArraysEqual.js");
const { getFilledRectangleShape, getHollowRectangleShape, getAlternatingRectangleShape, getFilledTriangleShape, getHollowTriangleShape, getAlternatingTriangleShape, getInterlacedRectangle, getInterlacedTriangle } = require("./shapes.js");

const rectangleTests = function () {
  assertArrayEqual(getFilledRectangleShape(1, 1), ["*"], "it should return a filled rectangle with 1x1");
  assertArrayEqual(getFilledRectangleShape(1, 3), ["***"], "it should return a filled rectangle with 1x3");
  assertArrayEqual(getFilledRectangleShape(3, 1), ["*", "*", "*"], "it should return a filled rectangle with 3x1");
  assertArrayEqual(getFilledRectangleShape(3, 9), ["*********", "*********", "*********"], "it should return a filled rectangle with 3x9");

  assertArrayEqual(getHollowRectangleShape(2, 9), ["*********", "*********"], "it should return a filled rectangle with 2x9");
  assertArrayEqual(getHollowRectangleShape(3, 9), ["*********", "*       *", "*********"], "it should return a hollow rectangle with 3x9");

  assertArrayEqual(getAlternatingRectangleShape(2, 5), ["-----", "+++++"], "it should return a alternating rectangle with 2x3");
  assertArrayEqual(getAlternatingRectangleShape(1, 5), ["-----"], "it should return a alternating rectangle with 1x5");
  assertArrayEqual(getAlternatingRectangleShape(5, 1), ["-", "+", "-", "+", "-"], "it should return a alternating rectangle with 5x1");

  assertArrayEqual(getInterlacedRectangle(3, 9), ["+-+-+-+-+", "-+-+-+-+-", "+-+-+-+-+"], "it should return a interlaced rectangle with 3x9");
}

const triangleTests = function () {
  assertArrayEqual(getFilledTriangleShape(6), ["*", "**", "***", "****", "*****", "******"], "it should return a filled triangle with the height of 6");

  assertArrayEqual(getHollowTriangleShape(1), ["*"], "it should return a hollow triangle with the height of 1");
  assertArrayEqual(getHollowTriangleShape(2), ["*", "**"], "it should return a hollow triangle with the height of 2");
  assertArrayEqual(getHollowTriangleShape(3), ["*", "**", "***",], "it should return a hollow triangle with the height of 3");
  assertArrayEqual(getHollowTriangleShape(6), ["*", "**", "* *", "*  *", "*   *", "******"], "it should return a hollow triangle with the height of 6");

  assertArrayEqual(getAlternatingTriangleShape(1), ["-"], "it should return a alternating triangle with the height of 1");
  assertArrayEqual(getAlternatingTriangleShape(2), ["-", "++"], "it should return a alternating triangle with the height of 2");
  assertArrayEqual(getAlternatingTriangleShape(3), ["-", "++", "---"], "it should return a alternating triangle with the height of 3");
  assertArrayEqual(getAlternatingTriangleShape(6), ["-", "++", "---", "++++", "-----", "++++++"], "it should return a alternating triangle with the height of 6");

  assertArrayEqual(getInterlacedTriangle(6), ["+", "-+", "+-+", "-+-+", "+-+-+", "-+-+-+"], "it should return a interlaced triangle with the height of 6");
}

const runTests = function () {
  rectangleTests()
  triangleTests()
}
runTests();



