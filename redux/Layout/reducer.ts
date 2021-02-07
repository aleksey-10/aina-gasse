import { LayoutState } from '../../interfaces/RootState';
import { FIRST_LOAD_COMPLETE, PAGE_LOADING } from '../types';
import { LayoutTypes } from './actions';

const initialState: LayoutState = {
  isFirstLoadCompleted: false,
  isPageLoading: true,
};

export default function Layout(
  state: LayoutState = initialState,
  action: LayoutTypes,
) {
  switch (action.type) {
    case FIRST_LOAD_COMPLETE:
      return {
        ...state,
        isFirstLoadCompleted: action.payload,
        isPageLoading: false,
      };

    case PAGE_LOADING:
      return { ...state, isPageLoading: action.payload };

    default:
      return state;
  }
}
