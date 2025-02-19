import cn from 'classnames';
import styles from './OldMailIcon.module.scss';

type OldMailIconProps = {
  classes?: string;
}

function OldMailIcon({ classes }: OldMailIconProps) {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(classes, styles.oldmail__icon)}>
    <circle cx="22.5" cy="22.5" r="22.5" fill="#121936"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1393 27.4663L25.8089 23.5L30.1393 19.5337L29.5488 18.9026L23.25 24.6719L16.9512 18.9026L16.3607 19.5337L20.6911 23.5L16.3607 27.4663L16.9512 28.0974L21.3308 24.0859L23.25 25.8438L25.1692 24.0859L29.5488 28.0974L30.1393 27.4663ZM15.576 17.25C14.767 17.25 14.1111 17.9488 14.1111 18.8079V28.1921C14.1111 29.0525 14.7616 29.75 15.576 29.75H30.924C31.7331 29.75 32.3889 29.0512 32.3889 28.1921V18.8079C32.3889 17.9475 31.7384 17.25 30.924 17.25H15.576Z" fill="#A8D2F4"/>
    </svg>
  );
}

export default OldMailIcon;
