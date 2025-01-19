import logo from '../../images/pognali-loading.svg';
import styles from './LogoLoading.module.scss';
import cn from 'classnames';

type LogoLoadingType = {
  classes?: string;
}

function LogoLoading({ classes }: LogoLoadingType) {
  return (
    <div className={cn(styles.wrapper, classes)}>
      <img src={logo} width='141' height='130' alt='Иконка ПОГНАЛИ.' />
    </div>
  );
}

export default LogoLoading;