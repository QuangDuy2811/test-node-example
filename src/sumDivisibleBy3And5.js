function sumDivisibleBy3And5(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array of numbers.");
  }

  return numbers.reduce((sum, num) => {
    if (typeof num !== 'number') {
      throw new Error("All elements must be numbers.");
    }

    return (num % 3 === 0 && num % 5 === 0) ? sum + num : sum;
  }, 0);
}

module.exports = sumDivisibleBy3And5;
