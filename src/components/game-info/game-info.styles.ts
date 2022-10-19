import styled from 'styled-components';

export const GameInfoContainer = styled.div`
	display: grid;

	grid-template-columns: auto 1fr auto;
	place-items: center;
	place-content: center;

	width: 100%;
	height: 100%;

	padding: 20px;
`;

export const MinesLeft = styled.p`
	background-color: #282c34;
	color: red;
	padding: 0 10px;
	border-radius: 5px;
	font-size: 20px;
	height: 30px;
`;

export const ResetGameButton = styled.button`
	outline: none;
	border-radius: 5px;
	text-transform: uppercase;
	background-color: #282c34;
	border: 2px solid #282c34;
	color: #ddd;
	height: 30px;
	width: 80px;
	font-weight: 600;
`;
