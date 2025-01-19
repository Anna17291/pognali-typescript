import logo from '../../images/logo-pognali-dark.svg';
import logomobile from '../../images/logo-pognali-mobile.svg';
import styles from './LogoFooter.module.scss';
import cn from 'classnames';

type LogoFooterProps = {
  classes?: string;
  isPositionAbsolute?: boolean;
}

function LogoFooter({classes, isPositionAbsolute} : LogoFooterProps) {

  return (
       <div className={cn([styles['logofooter__wrapper']], {[styles['logofooter__wrapper--absolute']]: isPositionAbsolute})}>
      <img src={logo} width='200' height='50' alt='Логотип ПОГНАЛИ.' />
      <img src={logomobile} width='96' height='15' alt='Логотип ПОГНАЛИ.' />
    </div>
  );
}

export default LogoFooter;
