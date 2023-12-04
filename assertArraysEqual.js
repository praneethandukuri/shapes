const areArraysEqual = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let index = 0; index < actual.length; index++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  }
  return true;
}

const assertArrayEqual = function (actualValue, expectedValue, description) {
  let symbol = "✅";
  let errorMessage = "";

  if (!areArraysEqual(actualValue, expectedValue)) {
    symbol = "❌";
    errorMessage = `Actual:${actualValue} but Expected:${expectedValue}`;
  }

  console.log(`${symbol} ${description} ${errorMessage}`);
}

module.exports = { assertArrayEqual }