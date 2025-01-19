import MailIcon from '../../ui/MailIcon/MailIcon';
import OldMailIcon from '../../ui/OldMailIcon/OldMailIcon';
import styles from './Mail.module.scss';
import cn from 'classnames';

type MailProps = {
  mail: string;
  href: string;
  isHeader?: boolean;
};

function Mail({ mail, href, isHeader }: MailProps) {
  return (
    <div className={cn([styles['mail']], {[styles['mail__wrapper-header']]: isHeader})}>
      {<a className={styles.mail} href={`mailto:${href}`}>
      {isHeader && <MailIcon />}
      {!isHeader && <OldMailIcon />}
      {!isHeader && mail}
      </a>}
    </div>
  );
}

export default Mail;
