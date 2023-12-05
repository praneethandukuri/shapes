// ================= is symbol? ======================
const isSymbol = function (currentRow) {
  return currentRow % 2 === 0 ? "+" : "-";
}
// ====================>>>>>>> RECTANGLE <<<<<<<<============================

// ===============filled rectangle =================
const getFilledRectangleShape = function (rows, columns) {
  const filledRectangleShape = [];

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    filledRectangleShape.push("*".repeat(columns));
  }
  return filledRectangleShape;
}

// ============== hollow rectangle =======================
const getHollowRectangleShape = function (rows, columns) {
  const hollowRectangleShape = [];

  const isCurrentIndexSymbol = function (currentRow, currentColumn, rows, columns) {
    const topAndLastRow = currentRow === 0 || currentRow === rows - 1;
    const rightAndLeftColumn = currentColumn === 0 || currentColumn === columns - 1;
    return topAndLastRow || rightAndLeftColumn ? "*" : " ";
  }

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    let row = "";
    for (let currentColumn = 0; currentColumn < columns; currentColumn++) {
      row += isCurrentIndexSymbol(currentRow, currentColumn, rows, columns);
    }
    hollowRectangleShape.push(row);
  }
  return hollowRectangleShape;
}

// =================== alternating rectangle ====================
const getAlternatingRectangleShape = function (rows, columns) {//(3,9)
  const alternatingRectangleShape = [];

  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    const symbol = isSymbol(currentRow);
    alternatingRectangleShape.push(symbol.repeat(columns))
  }

  return alternatingRectangleShape;
}

// ================= interlaced rectangle =================
const isEven = function (num) {
  return num % 2 === 0
}

const getInterlacedRow = function (columns, firstSymbol, secondSymbol) {
  let row = ""
  for (let currentColumn = 1; currentColumn <= columns; currentColumn++) {
    row += (isEven(currentColumn) ? firstSymbol : secondSymbol)
  }
  return row
}

const getInterlacedRectangle = function (rows, columns) {
  const interlacedRectangle = [];

  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let [firstSymbol, secondSymbol] = isEven(currentRow) ? ["+", "-"] : ["-", "+"];
    const row = getInterlacedRow(columns, firstSymbol, secondSymbol)
    interlacedRectangle.push(row);
  }
  return interlacedRectangle;
}

// ================>>>>>>>>>>> TRIANGLE <<<<<<<<<<===========================

// ==================== filled triangle ===================== 

const getFilledTriangleShape = function (rows) {
  const trianglePattern = [];
  let symbol = "*";
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    trianglePattern.push(symbol.repeat(currentRow));
  }
  return trianglePattern;
}

const getHollowTriangleShape = function (height) {
  if (height <= 2) {
    return getFilledTriangleShape(height)
  }

  const hollowTriangleShape = ["*"]

  for (let currentRow = 2; currentRow < height; currentRow++) {
    hollowTriangleShape.push("*" + " ".repeat(currentRow - 2) + "*")
  }

  hollowTriangleShape.push("*".repeat(height))

  return hollowTriangleShape;
}


// ================== alternating triangle ====================
const getAlternatingTriangleShape = function (height) {
  const alternatingTriangleShape = [];
  for (let currentRow = 1; currentRow <= height; currentRow++) {
    const symbol = isSymbol(currentRow);
    alternatingTriangleShape.push(symbol.repeat(currentRow))
  }
  return alternatingTriangleShape;
}

// =================interlaced triangle ======================

const getInterlacedTriangle = function (height) {
  const interlacedTriangle = [];
  for (let currentRow = 1; currentRow <= height; currentRow++) {
    let [firstSymbol, secondSymbol] = isEven(currentRow) ? ["+", "-"] : ["-", "+"];
    const row = getInterlacedRow(currentRow, firstSymbol, secondSymbol)
    interlacedTriangle.push(row);
  }
  return interlacedTriangle;
}

// ===============>>>>>>>>>>>> DIAMOND <<<<<<<<<<=========================
// ============== filled diamond ===================
const getFilledDiamondShape = function (rows) {

  const filledDiamond = [];
  // Upper part of the diamond
  for (let i = 0; i < Math.ceil(rows / 2); i++) {
    let spaces = " ".repeat(Math.floor(rows / 2) - i);
    let stars = "*".repeat(2 * i + 1);
    filledDiamond.push(spaces + stars);
  }

  // Lower part of the diamond
  for (let i = Math.floor(rows / 2) - 1; i >= 0; i--) {
    let spaces = " ".repeat(Math.floor(rows / 2) - i);
    let stars = "*".repeat(2 * i + 1);
    filledDiamond.push(spaces + stars);
  }
  return filledDiamond;
}

const getHollowDiamondShape = function (rows) {
  const midddleOfRows = Math.ceil(rows / 2);
  const hollowDiamond = [];
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    const spaces = Math.abs(midddleOfRows - currentRow);
    if (currentRow === 1 || currentRow === rows) {
      hollowDiamond.push(' '.repeat(spaces) + '*'.repeat(1));
    } else {
      hollowDiamond.push(' '.repeat(spaces) + '*' + ' '.repeat((rows - 2 * spaces) - 2) + '*');
    }
  }
  return hollowDiamond;
}


const getInterlacedDiamond = function (rows) {
  const interlacedDiamond = [];
  // Upper part of the diamond
  for (let currentRow = 1; currentRow < Math.ceil(rows / 2); currentRow++) {
    let spaces = " ".repeat(Math.floor(rows / 2) - currentRow);
    let [firstSymbol, secondSymbol] = isEven(currentRow) ? ["+", "-"] : ["-", "+"];
    const row = getInterlacedRow(currentRow, firstSymbol, secondSymbol)
    interlacedDiamond.push(spaces + row);
  }

  // Lower part of the diamond
  for (let i = Math.floor(rows / 2) - 1; i >= 0; i--) {
    let spaces = " ".repeat(Math.floor(rows / 2) - i);
    let stars = "*".repeat(2 * i + 1);
    interlacedDiamond.push(spaces + stars);
  }
  return interlacedDiamond;
}

// =============== code exporting =============================
module.exports = { getFilledRectangleShape, getHollowRectangleShape, getAlternatingRectangleShape, getInterlacedRectangle, getFilledTriangleShape, getHollowTriangleShape, getAlternatingTriangleShape, getInterlacedTriangle, getFilledDiamondShape, getHollowDiamondShape, getInterlacedDiamond }



