import { all, call } from 'typed-redux-saga/macro';
import { gameSagas } from './game/game.sagas';

function* rootSaga() {
	yield* all([call(gameSagas)]);
}

export default rootSaga;
