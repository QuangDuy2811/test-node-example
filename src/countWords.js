function countWords(str) {
    if (!str || typeof str !== 'string') return 0;

    // Loại bỏ khoảng trắng ở đầu/cuối và tách theo khoảng trắng liên tiếp
    const words = str.trim().split(/\s+/);
    
    return words.filter(word => word.length > 0).length;
}

module.exports = countWords;
