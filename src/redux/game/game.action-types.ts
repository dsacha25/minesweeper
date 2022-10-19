import Coord from '../../utils/types/coord/coord';
import PlotState from '../../utils/types/plot-state/plot-state';
import GameTypes from './game.types';

export interface ResetGameAction {
	type: GameTypes.RESET_GAME;
}

export interface SetUpGameStartAction {
	type: GameTypes.SET_UP_GAME_START;
}

export interface SetUpGameSuccessAction {
	type: GameTypes.SET_UP_GAME_SUCCESS;
	payload: PlotState[][];
}

export interface EndGameAction {
	type: GameTypes.GAME_OVER;
}

export interface SelectPlotStartAction {
	type: GameTypes.SELECT_PLOT_START;
	payload: Coord;
}

export interface SelectPlotSuccessAction {
	type: GameTypes.SELECT_PLOT_SUCCESS;
	payload: PlotState[][];
}

export interface MarkPlotStartAction {
	type: GameTypes.MARK_PLOT_START;
	payload: Coord;
}

export interface MarkPlotSuccessAction {
	type: GameTypes.MARK_PLOT_SUCCESS;
	payload: PlotState[][];
}

export interface UpdateGameStatsAction {
	type: GameTypes.UPDATE_STATS;
	payload: number;
}

type GameActions =
	| ResetGameAction
	| SetUpGameStartAction
	| SetUpGameSuccessAction
	| EndGameAction
	| SelectPlotStartAction
	| SelectPlotSuccessAction
	| MarkPlotStartAction
	| MarkPlotSuccessAction
	| UpdateGameStatsAction;

export default GameActions;
