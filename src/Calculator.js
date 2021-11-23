const Calculator = {
  add: (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    return NaN;
  },
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export default Calculator;
