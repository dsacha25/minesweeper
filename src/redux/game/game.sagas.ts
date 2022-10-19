import { all, call, put, takeEvery, select } from 'typed-redux-saga/macro';
import PlotState from '../../utils/types/plot-state/plot-state';
import {
	endGame,
	markPlotSuccess,
	selectPlotSuccess,
	setUpGameSuccess,
} from './game.actions';
import {
	selectBoardSize,
	selectPlotsState,
	selectTotalMines,
} from './game.selector';
import GameTypes from './game.types';
import {
	MarkPlotStartAction,
	SelectPlotStartAction,
} from './game.action-types';
import updateMatrix from '../../utils/helpers/matrix/update-matrix';
import generateRandomCoords from '../../utils/helpers/matrix/generate-random-coords';
import detectNearbyMines from '../../utils/helpers/matrix/detect-nearby-mines';
import queryNullCoords from '../../utils/helpers/matrix/query-null-coords';

export function* markPlot({ payload: coord }: MarkPlotStartAction) {
	const plotsState = yield* select(selectPlotsState);

	const { x, y } = coord;

	const markedPlot: PlotState = {
		...plotsState[y][x],
		flagged: !plotsState[y][x].flagged,
	};

	const update = updateMatrix(plotsState, coord, markedPlot);

	yield* put(markPlotSuccess(update));
}

export function* onMarkPlotStart() {
	yield* takeEvery(GameTypes.MARK_PLOT_START, markPlot);
}

export function* selectPlot({ payload: coord }: SelectPlotStartAction) {
	const plotsState = yield* select(selectPlotsState);
	yield console.log('COORD: ', coord);

	const { x, y } = coord;

	yield console.log('Plot: ', plotsState[y][x]);

	if (plotsState[y][x].selected) return;
	if (plotsState[y][x].hasMine) {
		yield* put(endGame());
		return;
	}

	const selectedPlot: PlotState = {
		...plotsState[y][x],
		selected: true,
	};

	let updatedPlots = updateMatrix(plotsState, coord, selectedPlot);

	let nullCoords = queryNullCoords(updatedPlots, [x, y]);
	let additionalCoords: number[][] = [];

	console.log('MINES 1');
	for (const p of updatedPlots) {
		for (const c of p) {
			if (c.nearbyMines === 1) {
				console.log(c.nearbyMines);
			}
		}
	}

	while (nullCoords.length > 0) {
		for (let i = 0; i < nullCoords.length; i++) {
			const nullCoord = nullCoords[i];
			// console.log('UPDATED PLOT: ', plotsState[y][x].nearbyMines);
			updatedPlots = updateMatrix(
				updatedPlots,
				{ x: nullCoord[0], y: nullCoord[1] },
				{
					...updatedPlots[nullCoord[1]][nullCoord[0]],
					selected: true,
				}
			);
		}

		for (const nCoord of nullCoords) {
			const moreCoords = queryNullCoords(updatedPlots, [nCoord[0], nCoord[1]]);

			for (const c of moreCoords) {
				if (!additionalCoords.find((d, i) => d[0] === c[0] && d[1] === c[1])) {
					additionalCoords.push(c);
				}
			}

			// console.log('ADDITIONAL COORDS: ', additionalCoords);
		}

		for (let i = 0; i < additionalCoords.length; i++) {
			const nullCoord = additionalCoords[i];
			updatedPlots = updateMatrix(
				updatedPlots,
				{ x: nullCoord[0], y: nullCoord[1] },
				{
					...updatedPlots[nullCoord[1]][nullCoord[0]],
					selected: true,
				}
			);
		}

		nullCoords = additionalCoords;
		additionalCoords = [];
	}

	console.log('MINES 2');
	for (const p of updatedPlots) {
		for (const c of p) {
			if (c.nearbyMines === 1) {
				console.log(c.nearbyMines);
			}
		}
	}

	// yield console.log('Adjacent Null Coords: ', nullCoords);

	yield console.log('Plot Update: ', updatedPlots);

	yield put(selectPlotSuccess(updatedPlots));
}

export function* onSelectPlotStart() {
	yield* takeEvery(GameTypes.SELECT_PLOT_START, selectPlot);
}

export function* gameSetUp() {
	const [width, height] = yield* select(selectBoardSize);
	let totalMines = yield* select(selectTotalMines);
	let plotState: PlotState[][] = [];
	let x: number = width;
	let y: number = height;

	let num = 0;

	let mineCoords = generateRandomCoords([width, height], totalMines);
	console.log('MINE COORDS: ', mineCoords);

	while (y > 0) {
		let row: PlotState[] = [];

		while (x > 0) {
			let hasMine: boolean =
				totalMines > 0 ? !!Math.round(Math.random()) : false;

			if (hasMine) {
				const inc = Math.round(Math.random());
				totalMines -= inc;
				num += inc;
			}

			row.push({ selected: false, hasMine: false, nearbyMines: 0 });
			x -= 1;
		}
		if (x === 0) {
			plotState.push(row);
			row = [];
			x = width;
		}
		y -= 1;
	}

	for (let mine of mineCoords) {
		plotState = updateMatrix(
			plotState,
			{ x: mine[0], y: mine[1] },
			{
				selected: false,
				hasMine: true,
				nearbyMines: 0,
			}
		);
	}

	plotState = detectNearbyMines(plotState);

	console.log('Total', num);

	console.log('State: ', plotState);

	yield* put(setUpGameSuccess(plotState));
}

export function* onResetGame() {
	yield* takeEvery(GameTypes.RESET_GAME, gameSetUp);
}

export function* onSetUpGameStart() {
	yield* takeEvery(GameTypes.SET_UP_GAME_START, gameSetUp);
}

export function* gameSagas() {
	yield* all([
		call(onSetUpGameStart),
		call(onResetGame),
		call(onSelectPlotStart),
		call(onMarkPlotStart),
	]);
}
