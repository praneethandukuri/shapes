const STAR = "*";
const SPACE = " ";
const HYPHEN = "-";

// ------------> FILLED RECTANGLE <--------------

function createFilledRectangle(rows, columns) {
  const filledRectangle = [];

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    filledRectangle.push(STAR.repeat(columns));
  }

  return filledRectangle.join("\n");
}

// -----------> HOLLOW RECTANGLE <------------

function getCharacer(currentRow, currentColumn, rows, columns) {
  const topAndLastRow = currentRow === 0 || currentRow === rows - 1;
  const rightAndLeftColumn = currentColumn === 0 || currentColumn === columns -
    1;

  return topAndLastRow || rightAndLeftColumn ? STAR : SPACE;
}

function createHollowRectangle(rows, columns) {
  const hollowRectangleShape = [];

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    let row = "";

    for (let currentColumn = 0; currentColumn < columns; currentColumn++) {
      row += getCharacer(currentRow, currentColumn, rows, columns);
    }

    hollowRectangleShape.push(row);
  }

  return hollowRectangleShape.join("\n");
}

// --------------> ALTERNATING RECTANGLE <--------------

function getSymbol(currentRow) {
  return currentRow % 2 === 0 ? STAR : HYPHEN;
}

function createAlternatingRectangle(rows, columns) {
  const alternatingRectangle = [];

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    alternatingRectangle.push(getSymbol(currentRow).repeat(columns));
  }

  return alternatingRectangle.join("\n");
}

// -----------> SPACED-ALTERNATING RECTANGLE <-----------

function createSpacedAlternatingRectangle(rows, columns) {
  const spacedAlternatingRectangle = [];
  const characters = [STAR, HYPHEN, SPACE];

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    const char = characters[currentRow % 3];
    spacedAlternatingRectangle.push(char.repeat(columns));
  }

  return spacedAlternatingRectangle.join("\n");
}

// -----------> triangle <-------------

function createFilledTriangle(rows) {
  const filledTriangle = [];

  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    filledTriangle.push(STAR.repeat(currentRow));
  }

  return filledTriangle.join("\n");
}

// ----------> right aligned triangle <----------

function createRightAlignedTriangle(rows) {
  const rightAlignedTriangle = [];

  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    const spaces = rows - currentRow;
    rightAlignedTriangle.push(SPACE.repeat(spaces) + STAR.repeat(rows -
      spaces));
  }

  return rightAlignedTriangle.join("\n");
}

function getRectangleShape(style, dimensions) {
  const [rows, columns] = [dimensions[1], dimensions[0]];

  switch (style) {
    case "filled-rectangle":
      return createFilledRectangle(rows, columns);
    case "hollow-rectangle":
      return createHollowRectangle(rows, columns);
    case "alternating-rectangle":
      return createAlternatingRectangle(rows, columns);
    case "triangle":
      return createFilledTriangle(columns);
    case "right-aligned-triangle":
      return createRightAlignedTriangle(columns);
    case "spaced-alternating-rectangle":
      return createSpacedAlternatingRectangle(rows, columns);
  }
}

function generatePattern(style, dimensions) {
  const shapePattern = getRectangleShape(style, dimensions);

  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return "";
  }

  return shapePattern;
}

//  ------------> TESTING <-----------

function testGeneratePattern(style, dimensions, expected, failed) {
  const actual = generatePattern(style, dimensions);
  if (actual !== expected) {
    failed.push([style, dimensions, actual, expected]);
  }
}

function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [0, 0], "", failed);
  testGeneratePattern('filled-rectangle', [1, 0], "", failed);
  testGeneratePattern('filled-rectangle', [0, 1], "", failed);
  testGeneratePattern('filled-rectangle', [1, 1], "*", failed);
  testGeneratePattern('filled-rectangle', [4, 4], "****\n****\n****\n****", failed);
  testGeneratePattern('filled-rectangle', [8, 4],
    "********\n********\n********\n********", failed);
}

function testHollowRectangle(failed) {
  testGeneratePattern("hollow-rectangle", [4, 3], "****\n*  *\n****", failed);
  testGeneratePattern("hollow-rectangle", [5, 4], "*****\n*   *\n*   *\n*****",
    failed);
  testGeneratePattern("hollow-rectangle", [6, 2], "******\n******", failed);
  testGeneratePattern("hollow-rectangle", [5, 1], "*****", failed);
  testGeneratePattern("hollow-rectangle", [1, 5], "*\n*\n*\n*\n*", failed);
  testGeneratePattern("hollow-rectangle", [0, 3], "", failed);
  testGeneratePattern("hollow-rectangle", [7, 0], "", failed);
}

function testAlternatingRectangle(failed) {
  testGeneratePattern("alternating-rectangle", [3, 3], "***\n---\n***", failed);
  testGeneratePattern("alternating-rectangle", [5, 4],
    "*****\n-----\n*****\n-----", failed);
  testGeneratePattern("alternating-rectangle", [6, 2], "******\n------",
    failed);
  testGeneratePattern("alternating-rectangle", [4, 1], "****", failed);
  testGeneratePattern("alternating-rectangle", [0, 5], "", failed);
  testGeneratePattern("alternating-rectangle", [7, 0], "", failed);
}

function testFilledTriangle(failed) {
  testGeneratePattern("triangle", [3], "*\n**\n***", failed);
  testGeneratePattern("triangle", [5], "*\n**\n***\n****\n*****", failed);
  testGeneratePattern("triangle", [1], "*", failed);
  testGeneratePattern("triangle", [0], "", failed);
}

function testRightAlignedTriangle(failed) {
  testGeneratePattern("right-aligned-triangle", [3], "  *\n **\n***", failed);
  testGeneratePattern("right-aligned-triangle", [5],
    "    *\n   **\n  ***\n ****\n*****", failed);
  testGeneratePattern("right-aligned-triangle", [1], "*", failed);
  testGeneratePattern("right-aligned-triangle", [0], "", failed);
}

function testSpacedAlternatingRectangle(failed) {
  testGeneratePattern("spaced-alternating-rectangle", [3, 4],
    "***\n---\n   \n***", failed);
  testGeneratePattern("spaced-alternating-rectangle", [5, 6],
    "*****\n-----\n     \n*****\n-----\n     ", failed);
  testGeneratePattern("spaced-alternating-rectangle", [4, 3],
    "****\n----\n    ", failed);
  testGeneratePattern("spaced-alternating-rectangle", [6, 2],
    "******\n------", failed);
  testGeneratePattern("spaced-alternating-rectangle", [0, 3],
    "", failed);
  testGeneratePattern("spaced-alternating-rectangle", [7, 0],
    "", failed);
}

function testAll() {
  const failed = [];

  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  testFilledTriangle(failed);
  testRightAlignedTriangle(failed);
  testSpacedAlternatingRectangle(failed);

  console.table(failed);
}

testAll();
