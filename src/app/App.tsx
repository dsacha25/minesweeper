import React from 'react';
import './App.css';
import MinesweeperMain from '../components/minesweeper-main/minesweeper-main.component';
import { AppContainer } from './app.styles';

function App() {
	return (
		<AppContainer>
			<MinesweeperMain />
		</AppContainer>
	);
}

export default App;
