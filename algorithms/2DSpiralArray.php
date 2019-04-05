<?php
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

function isEdge($n, $x, $y, $dir, $map) {
    if ($map[$x + $dir['x']][$y + $dir['y']]) return true;

    switch ($dir['current']) {
        case 'right': return ($x === $n -1);
        case 'down': return ($y === $n -1);
        case 'left': return ($x === 0);
        case 'up': return ($y === 0);
    }
}

function spiralArray($n) {
    $i = 0;
    $max = $n * $n;
    $x = 0;
    $y = 0;

    $map = [];
    $dirs = [
        'right' => ['current' => 'right', 'next' => 'down', 'x' => 1, 'y' => 0],
        'down' => ['current' => 'down', 'next' => 'left', 'x' => 0, 'y' => 1],
        'left' => ['current' => 'left', 'next' => 'up', 'x' => -1, 'y' => 0],
        'up' => ['current' => 'up', 'next' => 'right', 'x' => 0, 'y' => -1],
    ];
    $dir = $dirs['right'];

    while ($i++ < $max) {
        $map[$x][$y] = $i;

        if (isEdge($n, $x, $y, $dir, $map)) $dir = $dirs[$dir['next']];

        $x += $dir['x'];
        $y += $dir['y'];
    }

    print_r($map);
}

spiralArray(8);
