import NextNProgress from 'nextjs-progressbar';
// import { useSelector } from 'react-redux';
// import RootState, { LayoutState } from '../../interfaces/RootState';
// import { Loader } from '../Loader';
// import styles from './styles.module.scss';

export const PageLoader = () => {
  // const { isFirstLoadCompleted, isPageLoading } = useSelector<RootState, LayoutState>(state => state.Layout);

  return (
    <>
      <NextNProgress
        color="#c5abcc"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ showSpinner: false }}
      />
      {/* {(isFirstLoadCompleted && isPageLoading) && (
        <div className={styles.loader}>
          <Loader size="lg" />
        </div>
      )} */}
    </>
  );
};
