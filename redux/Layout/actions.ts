import { FIRST_LOAD_COMPLETE, PAGE_LOADING } from '../types';

interface LoadType {
  type: string;
  payload?: boolean;
}

export const setFirstLoadComplete = (value = true): LoadType => ({
  type: FIRST_LOAD_COMPLETE,
  payload: value,
});

export const setPageLoading = (value = true): LoadType => ({
  type: PAGE_LOADING,
  payload: value,
});

export type LayoutTypes = LoadType;
