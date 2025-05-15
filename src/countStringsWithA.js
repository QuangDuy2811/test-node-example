function countStringsWithA(strings) {
    if (!Array.isArray(strings)) return 0;

    return strings.filter(str => typeof str === 'string' && str.includes('a')).length;
}

module.exports = countStringsWithA;
