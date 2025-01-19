import cn from 'classnames';
import styles from './Button.module.scss';
import { ReactElement } from 'react';

type ButtonProps = {
  apperance?: 'base' | 'contrast' | 'light' | 'neutral' | 'dark' | 'pale' | 'heaven' ;
  icon?:ReactElement;
  text?: string;
  classes?: string;
  children?: ReactElement;
  type?: 'submit' | 'reset' | 'button';
  onButtonClick?: () => void;
  onButtonFocus?: () => void;
};

function Button({
  apperance = 'base',
  type = 'button',
  icon,
  text,
  children,
  classes,
  onButtonClick,
  onButtonFocus
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, styles[`button--${apperance}`], classes)}
      type={type}
      onClick={onButtonClick}
      onFocus={onButtonFocus}
    >
      {icon}
      {text}
      {children}
    </button>
  );
}

export default Button;
