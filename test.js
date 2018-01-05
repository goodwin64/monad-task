const assert = require('assert');
const canReach = require('./src/index.js');
const { getMatrixPositionFromChess } = require('./src/helpers.js');

it('should return true if position is reachable', () => {
    assert.equal(canReach([6, 2], [8, 1], 1), true);
    assert.equal(canReach([6, 2], [8, 2], 2), true);
    assert.equal(canReach([6, 2], [6, 2], 0), true);
});

it('should return false if position is not reachable', () => {
    assert.equal(canReach([6, 2], [8, 1], 2), false);
    assert.equal(canReach([6, 2], [8, 2], 1), false);
    assert.equal(canReach([6, 2], [8, 1], 0), false);
});

it('should parse chess position notation to array: [6; 2]', () => {
    assert.deepEqual(
        getMatrixPositionFromChess([6, 2]),
        [6, 5],
    );
});

it('should parse chess position notation to array: [1; 1] (board size=3)', () => {
    assert.deepEqual(
        getMatrixPositionFromChess([1, 1], 3),
        [2, 0],
    );
});

it('should parse chess position notation to array: [1; 1] (board size=8)', () => {
    assert.deepEqual(
        getMatrixPositionFromChess([1, 1]),
        [7, 0],
    );
});
