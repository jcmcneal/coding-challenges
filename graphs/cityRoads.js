class Graph {
    constructor() {
        this.length = 0;
        this.vertices = new Map();
    }

    addVertex(vertex) {
        this.length++;
        this.vertices.set(vertex, []);
    }

    addEdge(a, b) {
        this.vertices.get(a).push(b);
        this.vertices.get(b).push(a);
    }

    hasEdge(a, b) {
        return this.vertices.get(a).includes(b);
    }

    createVisitedMap() {
        const visited = new Map();

        for (let n = 1; n <= this.length; n++) {
            visited.set(n, false);
        }

        return visited;
    }

    DFSearch(n, visited) {
        visited.set(n, true);

        const vertex = this.vertices.get(n);

        vertex.forEach(child => {
            if (!visited.get(child)) this.DFSearch(child, visited);
        });
    }

    isConnected() {
        const visited = this.createVisitedMap();
        let i;

        // return false if there are any disconnected vertices
        for (i = 1; i <= this.length; i++) {
            if (!this.vertices.get(i).length) {
                // console.log(`${i} is empty`);
                return false;
            }
        }

        // traverse the tree
        this.vertices.forEach((vertex, i) => {
            if (!visited.get(i) && vertex.length > 0)
                this.DFSearch(i, visited);
        })

        // Every one has been visited
        for (i = 1; i <= visited.length; i++) {
            if (!visited.get(i)) return false;
        }

        return true;
    }

    isEulerian() {
        if (!this.isConnected()) return 0;

        let oddNum = 0;
        this.vertices.forEach(vertex => {
            if (vertex.length % 2 !== 0) oddNum++;
        });

        if (oddNum > 2) return 0;

        return (oddNum === 2) ? 1 : 2;
    }

    print() {
        console.log({
            length: this.length,
            vertices: this.vertices,
            isEulerian: this.isEulerian(),
        });
    }
}

/**
 * minimumRoadCost()
 * @param {int} numCities - number of cities in the graph
 * @param {array: arrays} cityPairs - list of pairs representing existing city connections
 * @param {int} numNewAvailable - maximum amount of new roads that can be built
 * @param {array: arrays} newRoadsCost - list of pairs representing possible new roads with their associated cost to build
 */
const minimumRoadCost = (numCities, cityPairs, numNewAvailable, newRoadsCost) => {
    const graph = new Graph();

    for (let i = 1; i <= numCities; i++) {
        graph.addVertex(i);
    }

    cityPairs.forEach(([a, b]) => {
        graph.addEdge(a, b);
    })

    // filter out existing roads and sort by cost ascending
    const sortedNewRoads = newRoadsCost
        .filter(([a, b]) => !graph.hasEdge(a, b))
        .sort((a, b) => a[2] > b[2]);

    // add new roads until all cities are connected
    let cost = 0;
    sortedNewRoads.some(([a, b, c]) => {
        console.log('Adding road:', a, b, c);
        graph.addEdge(a, b);
        cost += c;

        if (graph.isConnected()) return true;

        return false;
    });

    console.log({ cost });
    graph.print();

    return cost;
};

// Test Case
const numCities = 6;
const cityPairs = [
    [1,4], [2,3], [4,5]
];
const numNewAvailable = 4;
const newRoadsCost = [
    [1, 2, 2], [3, 6, 10], [6, 1, 5], [4, 5, 5]
]

minimumRoadCost(numCities, cityPairs, numNewAvailable, newRoadsCost);
