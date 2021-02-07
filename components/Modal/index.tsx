/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useMemo } from 'react';
import { Body, Footer, Header } from './components';
import { Fade } from 'react-reveal';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  visible: boolean;
  onClose(): void;
}

const Modal = ({ children, visible, onClose }: Props) => {
  const classNames = useMemo(() => {
    return classnames({
      [styles.mask]: true,
      [styles.visible]: visible,
    });
  }, [visible]);

  return (
    <Fade duration={500} when={visible} unmountOnExit>
      <div className={classNames} onClick={onClose}>
        <div
          className={styles.modal}
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Fade>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
