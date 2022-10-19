import React from 'react';
import useSelector from '../../hooks/use-selector/use-selector.hooks';
import {
	selectBoardSize,
	selectGameOver,
	selectPlotsState,
} from '../../redux/game/game.selector';
import Plot from '../plot/plot.component';
import { BoardContainer, GameOverDisplay } from './board.styles';

const Board = () => {
	const [x, y] = useSelector((state) => selectBoardSize(state));
	const plotsState = useSelector((state) => selectPlotsState(state));
	const gameOver = useSelector((state) => selectGameOver(state));

	return (
		<BoardContainer x={x} y={y}>
			{plotsState.map((row, y) =>
				row.map((plot, x) => <Plot state={plot} key={x + y} coord={{ x, y }} />)
			)}

			{gameOver && <GameOverDisplay>Game Over</GameOverDisplay>}
		</BoardContainer>
	);
};

export default Board;
