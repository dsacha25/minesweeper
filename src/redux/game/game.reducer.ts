import GameActions from './game.action-types';
import GameTypes from './game.types';
import { produce } from 'immer';
import Difficulty from '../../utils/types/difficulty/difficulty';
import PlotState from '../../utils/types/plot-state/plot-state';

export interface GameState {
	totalMines: number;
	boardSize: [number, number];
	plotsState: PlotState[][];
	gameOver: boolean;
	difficulty: Difficulty;
}

const INITIAL_STATE: GameState = {
	totalMines: 40,
	boardSize: [16, 16],
	plotsState: [],
	gameOver: false,
	difficulty: 'medium',
};

const gameReducer = produce(
	(state: GameState = INITIAL_STATE, action: GameActions) => {
		switch (action.type) {
			case GameTypes.GAME_OVER:
				state.gameOver = true;
				return state;
			case GameTypes.RESET_GAME:
				state.plotsState = [];
				state.totalMines = 40;
				state.gameOver = false;
				return state;
			case GameTypes.SET_UP_GAME_SUCCESS:
				state.plotsState = action.payload;
				state.gameOver = false;
				return state;
			case GameTypes.MARK_PLOT_SUCCESS:
			case GameTypes.SELECT_PLOT_SUCCESS:
				state.plotsState = action.payload;
				return state;
			case GameTypes.UPDATE_STATS:
				state.totalMines = action.payload;
				return state;
			default:
				return state;
		}
	},
	INITIAL_STATE
);

export default gameReducer;
