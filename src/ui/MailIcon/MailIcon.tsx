import styles from './MailIcon.module.scss';

type MailIconProps = {
  classes?: string;
}

function MailIcon({ classes }: MailIconProps) {
  return (
    <svg className={styles.mailicon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className={styles.mailicon_circle} cx="25" cy="25" r="25" fill="#7EBAEB"/>
    <path className={styles.mailicon_path} d="M18.259 20.6003L24.259 24.3607C24.4606 24.4867 24.7214 24.5464 24.9838 24.5464C25.2462 24.5464 25.507 24.4867 25.7086 24.3607L31.7086 20.6003C32.0998 20.3548 32.4694 19.4 31.7518 19.4H18.2166C17.499 19.4 17.8686 20.3548 18.259 20.6003ZM31.8902 22.6564L25.7086 26.4149C25.4366 26.5811 25.2462 26.6007 24.9838 26.6007C24.7214 26.6007 24.531 26.5811 24.259 26.4149C23.987 26.2488 18.5526 22.9252 18.1086 22.6555C17.7966 22.4651 17.7998 22.6881 17.7998 22.8599V29.6667C17.7998 30.0587 18.2526 30.6 18.5998 30.6H31.3998C31.747 30.6 32.1998 30.0587 32.1998 29.6667V22.8608C32.1998 22.6891 32.203 22.466 31.8902 22.6564Z" fill="#161C35"/>
    </svg>
  );
}

export default MailIcon;
