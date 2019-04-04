import { verticalSort, tree } from './verticalSort';

test('verticalSort', () => {
    const sorted = verticalSort(tree);
    console.log(sorted);
    expect(sorted).toEqual([5, 9, 0, 6, 1, 4, 7, 3]);
});

test('verticalSort', () => {
    tree.left.left.right.right = { value: 4 };
    const sorted = verticalSort(tree);
    console.log(sorted);
    expect(sorted).toEqual([5, 9, 0, 6, 1, 4, 4, 7, 3]);
});
