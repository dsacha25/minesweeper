import { TypedUseSelectorHook, useSelector as _useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';

const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export default useSelector;
