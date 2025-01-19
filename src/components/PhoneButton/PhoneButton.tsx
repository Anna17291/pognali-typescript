import PhoneIcon from '../../ui/PhoneIcon/PhoneIcon';
import styles from './PhoneButton.module.scss';
import cn from 'classnames';

type PhoneButtonProps = {
  isMenuOpen: boolean;
  onPhoneButtonClick: () => void;
};

function PhoneButton({ isMenuOpen, onPhoneButtonClick }: PhoneButtonProps) {
  return (
    <button
      className={cn(styles['button'], {
        [styles['button--hidden']]: isMenuOpen,
      })}
      onClick={onPhoneButtonClick}
    >
      <PhoneIcon classes={styles.icon} />
    </button>
  );
}

export default PhoneButton;
