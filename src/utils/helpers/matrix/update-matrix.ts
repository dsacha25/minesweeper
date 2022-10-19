import Coord from '../../types/coord/coord';

function updateMatrix<T>(matrix: T[][], coord: Coord, update: T) {
	const { x, y } = coord;
	return matrix.map((row, i) =>
		i === y ? row.map((col, j) => (j === x ? update : col)) : row
	);
}

export default updateMatrix;
