import { Layout } from '../components/Layout';
import { Fade } from 'react-reveal';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import RootState from '../interfaces/RootState';
import { withTranslation } from '../i18n';
import { ReactNode } from 'react';

interface Image {
  original: string;
}

const images: Image[] = [
  {
    original:
      'https://scontent-iev1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/135295428_183684940154133_8027505456403924715_n.jpg?_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=RInqFI2g4EoAX9pVN9x&tp=1&oh=fb933f797e4bd89b6aa056f638faf0a5&oe=6024F2FE',
  },
  {
    original:
      'https://scontent-prg1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/132048518_1004391160051116_8123190772381836393_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=TGDqZoOPlSAAX_uNkW4&tp=1&oh=3cf49ef40a0d735eccbd1b55d9358c07&oe=601D2474',
  },
];

const aina = 'https://ainagasse.ua/wp-content/uploads/2019/12/Айна-Гассе.jpeg';

interface Props {
  t(s: string): ReactNode;
}

function Index({ t }: Props) {
  const isPageLoading = useSelector<RootState, boolean>(
    (state) => state.Layout.isPageLoading,
  );

  return (
    <Layout title={t('Main Page').toString()}>
      <div className="container">
        <section className={`section ${styles.intro}`}>
          <div className={styles.left}>
            <Fade left when={!isPageLoading}>
              <img alt="Aina Gasse" src={aina} className={styles.aina} />
            </Fade>
          </div>
          <div className={styles.center}>
            <Fade when={!isPageLoading}>
              {/* <ImageGallery
                items={images}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets
                showNav={false}
                autoPlay
                lazyLoad
              /> */}
              <img
                src={images[0].original}
                alt="model"
                className={styles.model}
              />
            </Fade>
          </div>
          <Fade right when={!isPageLoading}>
            <p className={styles.description}>
              {t('homeFirstSectionDescription')}
            </p>
          </Fade>
        </section>
      </div>
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Index);
