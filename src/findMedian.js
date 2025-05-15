function findMedian(numbers) {
    if (numbers.length === 0) return null;

    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 1) {
        return sorted[mid]; // số lẻ → lấy số ở giữa
    } else {
        return (sorted[mid - 1] + sorted[mid]) / 2; // số chẵn → trung bình của 2 số giữa
    }
}

module.exports = findMedian;
