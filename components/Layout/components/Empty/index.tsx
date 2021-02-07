import { Fade } from 'react-reveal';
import { Link } from '../../../../i18n';
import { Button } from '../../../Button';

interface ButtonType {
  link: string;
  text: string;
}

interface Props {
  title: string;
  description: string;
  button: ButtonType;
}

export const Empty = ({ title, description, button }: Props) => {
  return (
    <section className="container section">
      <Fade>
        <h1>{title}</h1>
        <h3 style={{ marginBottom: 16 }}>{description}</h3>
        <Link href={button.link}>
          <a>
            <Button type="link">{button.text}</Button>
          </a>
        </Link>
      </Fade>
    </section>
  );
};
