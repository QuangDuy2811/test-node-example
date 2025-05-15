function secondLargest(numbers){
    if (!Array.isArray(numbers) || numbers.length < 2) {
    throw new Error("Input must be an array with at least two numbers.");
  }

  const uniqueNumbers = [...new Set(numbers)];
  if (uniqueNumbers.length < 2) {
    throw new Error("Array must contain at least two unique numbers.");
  }

  uniqueNumbers.sort((a, b) => b - a); // Descending order
  return uniqueNumbers[1]; // Second largest
}
module.exports= secondLargest;