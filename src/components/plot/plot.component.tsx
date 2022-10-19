import React, { FC, MouseEvent } from 'react';
import useActions from '../../hooks/use-actions/use-actions.hook';
import useSelector from '../../hooks/use-selector/use-selector.hooks';
import { selectGameOver } from '../../redux/game/game.selector';
import { PlotContainer } from './plot.styles';
import PlotProps from './types';

const Plot: FC<PlotProps> = ({ state, coord }) => {
	const { selectPlotStart, markPlotStart } = useActions();
	const gameOver = useSelector((state) => selectGameOver(state));

	const handleClick = () => {
		return !gameOver && !state.flagged && selectPlotStart(coord);
	};

	const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		return !gameOver && markPlotStart(coord);
	};

	return (
		<PlotContainer
			active={state.selected}
			onClick={handleClick}
			onContextMenu={handleRightClick}
		>
			{/* <p>
				X: {coord.x} Y:{coord.y}
			</p> */}
			{!state.selected && state.flagged && <p>F</p>}
			{(state.selected && state.hasMine) ||
				(gameOver && state.hasMine && <p>M</p>)}
			{state.selected && !state.hasMine && !!state.nearbyMines && (
				<p>{state.nearbyMines}</p>
			)}
		</PlotContainer>
	);
};

export default Plot;
