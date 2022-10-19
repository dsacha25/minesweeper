import Plot from '../../../components/plot/plot.component';
import PlotState from '../../types/plot-state/plot-state';
import directions from '../constants/directions';

// function solution(matrix: boolean[][]): number[][] {
// 	return matrix.map((row, y) =>
// 		row.map((col, x) =>
// 			directions.reduce(
// 				(count, i) =>
// 					!!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])
// 						? count + 1
// 						: count,
// 				0
// 			)
// 		)
// 	);
// }

const detectNearbyMines = (matrix: PlotState[][]) => {
	return matrix.map((row, y) =>
		row.map((plot, x) => {
			const nearbyMines = directions.reduce(
				(count, i) =>
					!!(
						matrix[y + i[0]] &&
						matrix[y + i[0]][x + i[1]] &&
						matrix[y + i[0]][x + i[1]].hasMine
					)
						? count + 1
						: count,
				0
			);

			return { ...plot, nearbyMines };
		})
	);
};

export default detectNearbyMines;
