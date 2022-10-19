import styled from 'styled-components';

interface BoardContainerProps {
	x: number;
	y: number;
}

export const BoardContainer = styled.div<BoardContainerProps>`
	display: grid;
	position: relative;

	grid-template: repeat(${({ x }) => x}, 1fr) / repeat(${({ y }) => y}, 1fr);

	width: 100%;
	height: 100%;
`;

export const GameOverDisplay = styled.h1`
	position: absolute;

	text-transform: uppercase;
	color: red;

	margin: auto auto 50px auto;
	place-self: center;
	align-self: center;

	font-size: 60px;
`;
