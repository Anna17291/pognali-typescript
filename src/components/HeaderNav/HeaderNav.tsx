import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import cn from 'classnames';
import { AppRoute } from '../../const';

type HeaderNavProps = {
  classes?: string;
}

function HeaderNav({ classes }: HeaderNavProps) {
  return (
    <ul className={cn(styles['nav-list'], classes)}>
      <li className={styles['nav-item']}>
        <Link className={styles['nav-subtitle-link']} to={AppRoute.Main}>
          О сервисе
        </Link>
      </li>
      <li className={styles['nav-item']}>
        <Link className={styles['nav-subtitle-link']} to={AppRoute.Form}>
          Направления
        </Link>
      </li>
      <li className={styles['nav-item']}>
        <Link className={styles['nav-subtitle-link']} to={AppRoute.Catalog}>
          Попутчики
        </Link>
      </li>
    </ul>
  );
}

export default HeaderNav;
