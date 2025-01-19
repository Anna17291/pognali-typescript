import styles from './Footer.module.scss';
import LogoFooter from '../LogoFooter/LogoFooter';
import Social from '../Social/Social';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className={styles.footer}>
      <Link className={styles.footer__logo} to={AppRoute.Main}>
       <LogoFooter /> 
       </Link>  
      <div className={styles.footer__wrapper}>
            <Social />
      </div>
    </footer>
  );
}

export default Footer;
