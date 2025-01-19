import Logo from '../Logo/Logo';
import Contacts from '../Contacts/Contacts';
import HeaderMobileMenu from '../HeaderMobileMenu/HeaderMobileMenu';
import HeaderNav from '../HeaderNav/HeaderNav';
import BurgerButton from '../BurgerButton/BurgerButton';
import CrossButton from '../CrossButton/CrossButton';
import { useResize } from '../../use-resize';
import LogoFooter from '../LogoFooter/LogoFooter';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import cn from 'classnames';

function Header(props: { isMenuOpen: any; setIsMenuOpen: any; }) {

  const { isMenuOpen, setIsMenuOpen } = props;
  const { isScreenLg, isScreenXl } = useResize();
  const location = useLocation();

  const isNotMain = () => {
    if (location.pathname !== '/') {
      return true;
    }
    else {
      return false;
    }
  }

  const handleOpenButtonClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseButtonClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className={cn(styles['inner-wrapper'], styles[(isNotMain() ? 'inner-wrapper--notmain' : 'inner-wrapper--main')])}>
        <nav className={styles.info}>
          <Link className={styles.header__logo} to={AppRoute.Main}>
            {isScreenXl && <Logo isWhite={false} />}
            {(isMenuOpen && isScreenLg && !isScreenXl) && <LogoFooter isPositionAbsolute={true} />}
            {(!isMenuOpen && isScreenLg && !isScreenXl) && <Logo isWhite={false} />}
            {(!isMenuOpen && !isScreenLg) && <Logo isWhite={true} />}
            {(isMenuOpen && !isScreenLg) && <Logo isWhite={false} />}
          </Link>
          <HeaderNav classes={styles.header__nav} />
          <Contacts classes={styles.social} />
          <BurgerButton onClick={handleOpenButtonClick} isMenuOpen={isMenuOpen} />
          <CrossButton onClick={handleCloseButtonClick} isMenuOpen={isMenuOpen} />
        </nav>
        <HeaderMobileMenu isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
}

export default Header;
