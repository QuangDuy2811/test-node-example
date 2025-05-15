function longestWord(words) {
    if (!Array.isArray(words) || words.length === 0) {
        throw new Error("Input must be a non-empty array of strings.");
    }

    let longest = "";

    for (const word of words) {
        if (typeof word !== 'string') {
            throw new Error("All elements must be strings.");
        }

        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

module.exports = longestWord;
