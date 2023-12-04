const { getFilledRectangleShape, getHollowRectangleShape, getAlternatingRectangleShape, getInterlacedRectangle, getFilledTriangleShape, getHollowTriangleShape, getAlternatingTriangleShape, getInterlacedTriangle, getFilledDiamondShape, getHollowDiamondShape } = require("./shapes.js");

const get2DPatternShape = function (shape, pattern, rows, columns) {
  let result = [];
  switch (shape) {
    case "rectangle":
      switch (pattern) {
        case "filled":
          result = getFilledRectangleShape(rows, columns);
          break;
        case "hollow":
          result = getHollowRectangleShape(rows, columns);
          break;
        case "alternating":
          result = getAlternatingRectangleShape(rows, columns);
          break;
        case "interlaced":
          result = getInterlacedRectangle(rows, columns);
          break;
      }
      break;
    case "triangle":
      switch (pattern) {
        case 'filled':
          result = getFilledTriangleShape(rows);
          break;
        case 'hollow':
          result = getHollowTriangleShape(rows);
          break;
        case 'alternating':
          result = getAlternatingTriangleShape(rows);
          break;
        case 'interlaced':
          result = getInterlacedTriangle(rows);
          break;
        case 'diamond':
          switch (pattern) {
            case 'filled':
              result = getFilledDiamondShape(rows);
              break;
            case 'hollow':
              result = getHollowDiamondShape(rows);
              break;
            case 'alternating':
              result = getAlternatingTriangleShape(rows);
              break;
            case 'interlaced':
              result = getInterlacedTriangle(rows);
          }
      }
      break;
    default:
      result = [];
  }
  return result;
}

const assignUserArgs = function (args, patterned2Dshape) {
  for (let i = 0; i < args.length; i += 2) {
    switch (args[i]) {
      case "-s":
        patterned2Dshape.shape = args[i + 1]
        break;
      case "-p":
        patterned2Dshape.pattern = args[i + 1]
        break;
      case "-d":
        patterned2Dshape.dimensions = args[i + 1]
        break;

      default:
        break;
    }
  }
}


const main = function (args) {
  let patterned2Dshape = {
    shape: "rectangle",
    pattern: "filled",
    dimensions: "5,5"
  }

  if (args.length > 0) {
    assignUserArgs(args, patterned2Dshape)
  }

  const rows = +patterned2Dshape.dimensions[0]
  const columns = +patterned2Dshape.dimensions[2]

  const result = get2DPatternShape(patterned2Dshape.shape, patterned2Dshape.pattern, rows, columns);
  console.log(result.join("\n"));
}
main(process.argv.slice(2));
