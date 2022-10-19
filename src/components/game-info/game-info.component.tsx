import React from 'react';
import useActions from '../../hooks/use-actions/use-actions.hook';
import useSelector from '../../hooks/use-selector/use-selector.hooks';
import { selectPossibleMinesLeft } from '../../redux/game/game.selector';
import {
	GameInfoContainer,
	MinesLeft,
	ResetGameButton,
} from './game-info.styles';

const GameInfo = () => {
	const { resetGame } = useActions();
	const mines = useSelector((state) => selectPossibleMinesLeft(state));
	return (
		<GameInfoContainer>
			<MinesLeft>{mines}</MinesLeft>
			<h1>Minesweeper</h1>
			<ResetGameButton onClick={resetGame}>Reset</ResetGameButton>
		</GameInfoContainer>
	);
};

export default GameInfo;
