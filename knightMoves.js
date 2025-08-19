// Knight's possible moves
const MOVES = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
];

// Helper function to check if a position is within the board
function isValidPosition(position) {
    const [x, y] = position;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Helper function to get all possible moves from a position
function getPossibleMoves(position) {
    const [x, y] = position;
    return MOVES.map(([dx, dy]) => [x + dx, y + dy])
                .filter(isValidPosition);
}

function knightMoves(start, end) {
    const queue = [[start]];
    const visited = new Set([start.toString()]);

    while (queue.length > 0) {
        const path = queue.shift();
        const currentPos = path[path.length - 1];

        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            return path;
        }

        for (const nextMove of getPossibleMoves(currentPos)) {
            if (!visited.has(nextMove.toString())) {
                visited.add(nextMove.toString());
                queue.push([...path, nextMove]);
            }
        }
    }
    return [];
}

// Example usage:
console.log(knightMoves([0, 0], [1, 2])); // [[0,0],[1,2]]
console.log(knightMoves([0, 0], [3, 3])); // [[0,0],[1,2],[3,3]] or another valid shortest path
