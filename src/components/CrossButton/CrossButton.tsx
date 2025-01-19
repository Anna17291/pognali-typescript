import Cross from '../Cross/Cross';
import styles from './CrossButton.module.scss';
import cn from 'classnames';

type CrossButtonProps = {
  isMenuOpen?: boolean;
  onClick: () => void;
  buttonClasses?: string;
  crossClasses?: string;
};

function CrossButton({ isMenuOpen, onClick, buttonClasses, crossClasses }: CrossButtonProps) {
  return (
    <button
      className={cn(
        styles['button'],
        {[styles['button--hidden']]: !isMenuOpen},
        buttonClasses)}
      type='button'
      onClick={onClick}
      area-label='Закрыть'
    >
      <Cross classes={crossClasses}/>
    </button>
  );
}

export default CrossButton;
