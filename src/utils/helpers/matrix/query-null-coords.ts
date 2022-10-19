import PlotState from '../../types/plot-state/plot-state';
import directions from '../constants/directions';

const queryNullCoords = (
	matrix: PlotState[][],
	[x, y]: [number, number]
): number[][] => {
	const coords = directions.reduce(
		(coords: number[][], dir) =>
			matrix[y + dir[1]] &&
			matrix[y + dir[1]][x + dir[0]] &&
			!matrix[y + dir[1]][x + dir[0]].hasMine &&
			!matrix[y + dir[1]][x + dir[0]].selected
				? [...coords, [x + dir[0], y + dir[1]]]
				: coords,
		[]
	);

	let hasNull: boolean = false;

	for (const c of coords) {
		if (matrix[c[1]][c[0]].nearbyMines === 0) {
			hasNull = true;
		}
	}

	return hasNull ? coords : [];
};

export default queryNullCoords;
