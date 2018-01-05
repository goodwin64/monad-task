const {
    getPrimitiveCoordinate,
    getMatrixPositionFromChess,
    getAllCellsInOneStep,
} = require('./helpers.js');

module.exports = function canReach(startPos, finalPos, steps) {
    const startPositionStr = getPrimitiveCoordinate(getMatrixPositionFromChess(startPos));
    const finalPositionStr = getPrimitiveCoordinate(getMatrixPositionFromChess(finalPos));
    const reachableCells = new Set([startPositionStr]);

    for (let i = 0; i < steps; i++) {
        Array
            .from(reachableCells)
            .map(cell => { reachableCells.delete(cell); return cell })
            .reduce((acc, curr) => {
                return acc.concat(getAllCellsInOneStep(curr));
            }, [])
            .forEach(cell => reachableCells.add(cell));
    }

    return reachableCells.has(finalPositionStr);
};
