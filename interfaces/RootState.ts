export interface LayoutState {
  isFirstLoadCompleted: boolean;
}

interface RootState {
  Layout: LayoutState;
};

export default RootState;
