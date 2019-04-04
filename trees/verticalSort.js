/**
 *  Given the root of a binary tree, print the nodes column wise and row wise
 *              6
 *             / \
 *            9   4
 *           / \   \
 *          5   1   3
 *           \     /
 *            0   7
 *
 *  Answer: [5, 9, 0, 6, 1, 4, 7, 3]
 */

 /**
  * getVerticalPairs()
  * @param {value: int, left:node, right:node} node
  * @param {int} pos
  * @param {object} map
  */
const getVerticalPairs = (node, pos = 0, map = {}) => {
    if (!node || node.value === undefined) return [];

    map[pos] = map[pos] || [];
    map[pos].push(node.value);

    getVerticalPairs(node.right, pos + 1, map);
    getVerticalPairs(node.left, pos - 1, map);

    return map;
}

/**
 * vertialSort()
 * @param {value:int, left:node, right:node} node
 * @return {object}
 */
const verticalSort = (node) => {
    const pairs = getVerticalPairs(node);

    // Sort & concat
    return Object.keys(pairs).sort((a, b) => a - b).reduce((accum, key) => accum.concat(pairs[key]), []);
};

/** Tree */
const tree = {
    value: 6,
    left: {
        value: 9,
        left: {
            value: 5,
            right: {
                value: 0,
            }
        },
        right: {
            value: 1,
        },
    },
    right: {
        value: 4,
        right: {
            value: 3,
            left: {
                value: 7,
            }
        }
    },
};

const sorted = verticalSort(tree);

module.exports = {
    getVerticalPairs,
    verticalSort,
    tree,
};
