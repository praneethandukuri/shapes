const assertEqual = function (actual, expected, description) {
  let errorMessage = "";
  let symbol = "✅";
  if (actual !== expected) {
    symbol = "❌";
    errorMessage = `----> Expected Value: ${expected} , Actual Value: ${actual}`
  }
  console.log(`${symbol} ${description} ${errorMessage}`);
}

module.exports = { assertEqual }