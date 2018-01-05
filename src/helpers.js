/**
 * chess:  [x, y], starts from left bottom (1..N)
 * matrix: [y, x], starts from top left (0..N-1)
 */
function getMatrixPositionFromChess(chessPosition, boardSize = 8) {
    const [x, y] = chessPosition;
    return [
        boardSize - y,
        x - 1,
    ];
}

/**
 * chess:  [x, y], starts from left bottom (1..N)
 * matrix: [y, x], starts from top left (0..N-1)
 */
function getChessPositionFromMatrix(matrixPosition, boardSize = 8) {
    const [y, x] = matrixPosition;
    return [
        x + 1,
        boardSize - y,
    ];
}

/**
 * [2, 4] -> "2;4"
 */
function getPrimitiveCoordinate([y, x]) {
    return `${y};${x}`;
}

function getAllCellsInOneStep(coord, min = 0, max = 7) {
    const [y, x] = coord.split(';').map(Number);
    const longStep = 2;
    const shortStep = 1;
    return [
        [y - longStep, x - shortStep],
        [y - longStep, x + shortStep],
        [y - shortStep, x + longStep],
        [y + shortStep, x + longStep],
        [y + longStep, x + shortStep],
        [y + longStep, x - shortStep],
        [y + shortStep, x - longStep],
        [y - shortStep, x - longStep],
    ]
        .filter(([y, x]) =>
            y >= min &&
            x >= min &&
            y <= max &&
            x <= max
        )
        .map(getPrimitiveCoordinate);
}

module.exports = {
    getMatrixPositionFromChess,
    getChessPositionFromMatrix,
    getPrimitiveCoordinate,
    getAllCellsInOneStep,
};
