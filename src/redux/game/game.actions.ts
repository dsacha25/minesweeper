import Coord from '../../utils/types/coord/coord';
import PlotState from '../../utils/types/plot-state/plot-state';
import {
	EndGameAction,
	MarkPlotStartAction,
	MarkPlotSuccessAction,
	ResetGameAction,
	SelectPlotStartAction,
	SelectPlotSuccessAction,
	SetUpGameStartAction,
	SetUpGameSuccessAction,
	UpdateGameStatsAction,
} from './game.action-types';
import GameTypes from './game.types';

export const resetGame = (): ResetGameAction => ({
	type: GameTypes.RESET_GAME,
});

export const setUpGameStart = (): SetUpGameStartAction => ({
	type: GameTypes.SET_UP_GAME_START,
});

export const setUpGameSuccess = (
	plotState: PlotState[][]
): SetUpGameSuccessAction => ({
	type: GameTypes.SET_UP_GAME_SUCCESS,
	payload: plotState,
});

export const endGame = (): EndGameAction => ({
	type: GameTypes.GAME_OVER,
});

export const selectPlotStart = (plot: Coord): SelectPlotStartAction => ({
	type: GameTypes.SELECT_PLOT_START,
	payload: plot,
});

export const selectPlotSuccess = (
	plotState: PlotState[][]
): SelectPlotSuccessAction => ({
	type: GameTypes.SELECT_PLOT_SUCCESS,
	payload: plotState,
});

export const markPlotStart = (plot: Coord): MarkPlotStartAction => ({
	type: GameTypes.MARK_PLOT_START,
	payload: plot,
});

export const markPlotSuccess = (
	plotState: PlotState[][]
): MarkPlotSuccessAction => ({
	type: GameTypes.MARK_PLOT_SUCCESS,
	payload: plotState,
});

export const updateGameStats = (mines: number): UpdateGameStatsAction => ({
	type: GameTypes.UPDATE_STATS,
	payload: mines,
});
