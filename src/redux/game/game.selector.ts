import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectGame = (state: RootState) => state.game;

export const selectGameOver = createSelector(
	selectGame,
	(game) => game.gameOver
);

export const selectPlotsState = createSelector(
	selectGame,
	(game) => game.plotsState
);

export const selectBoardSize = createSelector(
	selectGame,
	(game) => game.boardSize
);

export const selectTotalMines = createSelector(
	selectGame,
	(game) => game.totalMines
);

export const selectPossibleMinesLeft = createSelector(
	selectGame,
	(game) => game.totalMines
);

export const selectGameDifficulty = createSelector(
	selectGame,
	(game) => game.difficulty
);
