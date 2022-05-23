import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import rootReducer from '../../store/reducers/rootReducer';
import { ActionType } from './actionTypes';

export type rootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<Promise<void>, rootState, unknown, ActionType>;
export type AppThunkDispatch = ThunkDispatch<rootState, unknown, ActionType>;
