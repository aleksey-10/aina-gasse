export interface LayoutState {
  isFirstLoadCompleted: boolean;
  isPageLoading: boolean;
}

interface RootState {
  Layout: LayoutState;
};

export default RootState;
