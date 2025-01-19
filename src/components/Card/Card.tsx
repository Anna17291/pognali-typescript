import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CardProps = {
  id: number;
  name: string;
  desire: string[];
  plane: boolean;
  car: boolean;
  bike: boolean;
  walk: boolean;
  level: number;
};

function Card({ id, name, desire, plane, car, bike, walk, level }: CardProps) {
  return (
    <Link to={AppRoute.Catalog} className={styles.card}>
    </Link>
  );
}

export default Card;
