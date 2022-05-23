import { useSelector } from 'react-redux';
import { rootState } from '../../types/store/rootStateType';

export const token = useSelector((state: rootState) => state.auth?.token?.token);
export const errorMessage = useSelector((state: rootState) => state.auth?.errorMessage);
export const loading = useSelector((state: rootState) => state.auth?.loading);