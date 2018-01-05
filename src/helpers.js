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

module.exports = {
    getMatrixPositionFromChess,
};
