export const convertToPercentage = (value, total) => {
  value = value ? value : 0;
  let percentage = (value / total) * 100;

  return parseFloat(percentage.toFixed(1));
};

export const getTheTotal = (value) => {
  let count = Object.values(value).reduce((a, b) => a + b, 0);

  return count;
};

export const calculateSpecificTotal = (points, specifics, totalPoints) => {
  let total = 0;

  specifics.forEach((key) => {
    if (points[key]) {
      total += points[key];
    }
  });

  // Round the total to the first decimal point
  const percentage = convertToPercentage(total, totalPoints);

  return percentage;
};
