import { useSelector } from 'react-redux';
import { rootState } from '../../types/store/rootStateType';

export const description = useSelector((state: rootState) => state.department.department?.description);
export const employees = useSelector((state: rootState) => state.department.department?.employees);
export const errorMessage = useSelector((state: rootState) => state.department?.errorMessage);
export const loading = useSelector((state: rootState) => state.departments?.loading);