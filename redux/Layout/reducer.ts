import { LayoutState } from '../../interfaces/RootState';
import { FIRST_LOAD_COMPLETE } from '../types';
import { LayoutTypes } from './actions';

const initialState: LayoutState = {
  isFirstLoadCompleted: false,
};

export default function Layout(state: LayoutState = initialState, action: LayoutTypes) {
  switch (action.type) {
    case FIRST_LOAD_COMPLETE:
      return { ...state, isFirstLoadCompleted: action.payload };

    default:
      return state;
  }
}
