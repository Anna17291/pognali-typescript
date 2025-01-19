import Burger from '../Burger/Burger';
import styles from './BurgerButton.module.scss';
import cn from 'classnames';

type BurgerButtonProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

function BurgerButton({ isMenuOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      className={cn(styles['button'], {
        [styles['button--hidden']]: isMenuOpen,
      })}
      type='button'
      onClick={onClick}
    >
      <Burger />
    </button>
  );
}

export default BurgerButton;
