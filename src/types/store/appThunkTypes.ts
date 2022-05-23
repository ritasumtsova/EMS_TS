import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootState } from './rootStateType';
import { ActionType } from './actionTypes';

export type AppThunk = ThunkAction<Promise<void>, rootState, unknown, ActionType>;
export type AppThunkDispatch = ThunkDispatch<rootState, unknown, ActionType>;
