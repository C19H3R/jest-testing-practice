const AnalyzeArray = (arr = []) => {
  const ansObj = {};

  if (arr.length === 0) {
    Object.assign(ansObj, {
      average: 0,
      min: undefined,
      max: undefined,
      length: 0,
    });
    return ansObj;
  }
  let average = 0;
  let min = 0;
  let max = 0;

  arr.forEach((item) => {
    if (typeof item === "number" && !Number.isNaN(average)) {
      average += item;
    } else {
      average = NaN;
      min = NaN;
      max = NaN;
    }
  });
  if (!Number.isNaN(average)) {
    min = Math.min(...arr);
    max = Math.max(...arr);
  }

  Object.assign(ansObj, {
    average: average / arr.length,
    min,
    max,
    length: arr.length,
  });
  return ansObj;
};

// console.log(AnalyzeArray([1, " a", 3]));

export default AnalyzeArray;
