import styled, { css } from 'styled-components';

interface PlotContainerProps {
	active: boolean;
}

const unselected = css`
	border: 1px solid grey;
	background: #ccc;
	color: #333;

	font-weight: bold;
	text-decoration: none;
	box-shadow: inset 3px 3px 2px #fff, inset 0 -3px 3px #999;

	:active {
		box-shadow: inset 0 -1px 1px #aaa;
		border-color: grey;
	}
`;

const selected = css`
	box-shadow: inset 0 -1px 1px #aaa;
	border-color: #777;
`;

export const PlotContainer = styled.button<PlotContainerProps>`
	display: grid;
	width: 30px;
	height: 30px;

	place-items: center;
	place-content: center;
	outline: none;
	border: none;

	font-size: 10px;
	font-weight: 800;
	color: darkblue;

	${({ active }) => (active ? selected : unselected)};
`;
