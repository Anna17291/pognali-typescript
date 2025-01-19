import { Link } from 'react-router-dom';
import styles from './HeaderMenuItem.module.scss';

type HeaderMenuItemProps = {
    text: string;
    href: string;
}

function HeaderMenuItem({ text, href }: HeaderMenuItemProps) {
  return (
    <li className={styles['menu-item']}>
      <Link className={styles['menu-link']} to={href}>
        {text}
      </Link>
    </li>
  );
}

export default HeaderMenuItem;
