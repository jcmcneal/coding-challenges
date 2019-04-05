/**
 *  Find the pattern and complete the function:
 *  int[][] spiral(int n);
 *  where n is the size of the 2D array.
 *  Samples:

    input = 3
    123
    894
    765

    input = 4
    01 02 03 04
    12 13 14 05
    11 16 15 06
    10 09 08 07

    input = 8
    1 2 3 4 5 6 7 8
    28 29 30 31 32 33 34 9
    27 48 49 50 51 52 35 10
    26 47 60 61 62 53 36 11
    25 46 59 64 63 54 37 12
    24 45 58 57 56 55 38 13
    23 44 43 42 41 40 39 14
    22 21 20 19 18 17 16 15
 */

const iterate = (prev) => {
    const dirs = {
        'right': 'down',
        'down': 'left',
        'left': 'up',
        'up': 'right',
    };
    const next = dirs[prev];

    return next;
}

const isEdge = (x, y, map) => {
    return map[`${x}-${y}`] !== undefined;
}

const spiral = (n) => {
    let i = 1;
    let max = n * n;
    let dir = 'right';
    const map = {};
    let loops = 0;

    for (let y = 0, x = 0; i <= max;) {
        loops++;
        let edge = false;
        if (!map[`${x}-${y}`]) map[`${x}-${y}`] = i;

        if (dir === 'right') {
            edge = isEdge(x + 1, y, map);
            if (x === n -1 || edge) dir = iterate(dir);
            else x++;
        }

        if (dir === 'down') {
            edge = isEdge(x, y + 1, map);
            if (y === n -1 || edge) dir = iterate(dir);
            else y++;
        }

        if (dir === 'left') {
            edge = isEdge(x - 1, y, map);
            if (x === 0 || edge) dir = iterate(dir);
            else x--;
        }

        if (dir === 'up') {
            edge = isEdge(x, y - 1, map);
            if (y === 0 || edge) dir = iterate(dir);
            else y--;
        }

        if (edge && i < max) i--;

        i++;
    }

    console.log(map, loops);
}

spiral(3);
