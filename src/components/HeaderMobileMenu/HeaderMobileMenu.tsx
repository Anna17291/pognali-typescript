import HeaderNav from '../HeaderNav/HeaderNav';
import Social from '../Social/Social';
import styles from './HeaderMobileMenu.module.scss';
import cn from 'classnames';
import Contacts from '../Contacts/Contacts';

type HeaderMobileMenuProps = {
  isMenuOpen: boolean;
};

function HeaderMobileMenu({ isMenuOpen }: HeaderMobileMenuProps) {
  return (
    <nav
      className={cn(styles.nav, {
        [styles['nav--hidden']]: (!isMenuOpen),
      })}
    >
      <HeaderNav />
      <div className={styles['contacts-wrapper']}>
        <div className={styles.contacts}>
          <Contacts classes={styles.HeaderMobileMenu__contacts} />
          <Social classes={styles.social} />
        </div>
      </div>
    </nav>
  );
}

export default HeaderMobileMenu;
