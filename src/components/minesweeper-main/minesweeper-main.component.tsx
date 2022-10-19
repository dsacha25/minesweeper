import React, { useEffect } from 'react';
import useActions from '../../hooks/use-actions/use-actions.hook';
import Board from '../board/board.component';
import GameInfo from '../game-info/game-info.component';
import { MineSweeperContainer } from './minesweeper-main.styles';

const MinesweeperMain = () => {
	const { setUpGameStart } = useActions();

	useEffect(() => {
		setUpGameStart();
	}, []);

	return (
		<MineSweeperContainer>
			<GameInfo />
			<Board />
		</MineSweeperContainer>
	);
};

export default MinesweeperMain;
