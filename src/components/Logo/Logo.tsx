import logo from '../../images/logo-pognali.svg';
import logomobile from '../../images/logo-pognali-mobile.svg';
import styles from './Logo.module.scss';
import cn from 'classnames';

type LogoProps = {
  classes?: string;
  isWhite?: boolean;
}

function Logo({ classes, isWhite }: LogoProps) {
  return (
       <div className={cn([styles['logoheader__wrapper']], {[styles['logoheader__wrapper--white']]: isWhite})}>
      <img src={logo} width="200" height="50" alt="Планета земля" />
      <img src={logomobile} width='96' height='15' alt='Логотип ПОГНАЛИ.' />
    </div>
  );
}

export default Logo;
