const binarySearch = (list, value) => {
    let start = 0;
    let end = list.length - 1;
    let middle = Math.floor(end / 2);

    while (list[middle] !== value && start < end) {
        if (list[middle] < value) {
            // go up
            start = middle + 1;
        } else {
            // go down
            end = middle - 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    return list[middle] === value ? middle : -1;
};

const list = [1,3,6,8,10,20,25,34,49,100,427];

list.forEach(v => console.log(v, binarySearch(list, v)));
console.log(5, binarySearch(list, 5));