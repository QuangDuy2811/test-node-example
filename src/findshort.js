function findShortestString(strings) {
    if (strings.length === 0) return null;

    let shortest = strings[0];

    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length < shortest.length) {
            shortest = strings[i];
        }
    }

    return shortest;
}

module.exports = findShortestString; 
