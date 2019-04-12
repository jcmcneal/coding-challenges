/**
 * Given 2 strings, write an algorithm to determind if
 * they are exactly one edit away from being equal
 */

/**
 * oneEditAway() - Time complexity = O(n)
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
const oneEditAway = (a, b) => {
    const diff = Math.abs(a.length - b.length);
    if (diff > 1) {
        // Length difference is greater than 1
        return false;
    }

    const max = a.length > b.length ? a : b;
    const min = a === max ? b : a;

    let edits = 0; // 2 edits and you're out

    let aI = 0;
    let bI = 0;
    while (aI < max.length) {
        const aLet = max[aI];
        const bLet = min[bI];

        if (aLet === bLet) {
            aI++;
            bI++;
            continue;
        }

        // Align indexes if offset
        const prevA = max[aI -1];
        if(prevA !== aLet && aLet === min[bI - 1]) {
            aI++;
            continue;
        }

        edits++;

        if (edits > 1) break;

        aI++;
        bI++;
    }

    // console.log(a, b, edits, edits === 1);
    return edits === 1;
};

oneEditAway('cat', 'at'); // true;
oneEditAway('baa', 'ca'); // false;
oneEditAway('supercool', 'supecool'); // true;
oneEditAway('one', 'oe'); // true;

module.exports = oneEditAway;
