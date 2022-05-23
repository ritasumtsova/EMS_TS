import { useSelector } from 'react-redux';
import { rootState } from '../../types/store/rootStateType';

export const departments = useSelector((state: rootState) => state.departments.departments?.data);
export const errorMessage = useSelector((state: rootState) => state.departments?.errorMessage);
export const loading = useSelector((state: rootState) => state.departments?.loading);