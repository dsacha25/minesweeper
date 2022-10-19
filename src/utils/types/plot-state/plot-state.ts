interface PlotState {
	selected: boolean;
	hasMine: boolean;
	nearbyMines: number;
	flagged?: boolean;
}

export default PlotState;
