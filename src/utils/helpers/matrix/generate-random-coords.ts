const generateRandomCoords = (
	boardSize: [number, number],
	max: number
): [number, number][] => {
	const [x, y] = boardSize;
	let mineCoords: [number, number][] = [];
	while (max > 0) {
		let randomCoord: [number, number] = [
			Math.round(Math.random() * x),
			Math.round(Math.random() * y),
		];

		if (
			!mineCoords.find(
				(x, i) => x[0] === randomCoord[0] && x[1] === randomCoord[1]
			)
		) {
			mineCoords.push(randomCoord);
			max -= 1;
		}
	}

	return mineCoords;
};

export default generateRandomCoords;
