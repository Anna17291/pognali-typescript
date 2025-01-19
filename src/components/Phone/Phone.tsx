import PhoneIcon from '../../ui/PhoneIcon/PhoneIcon';
import OldPhoneIcon from '../../ui/OldPhoneIcon/OldPhoneIcon';
import styles from './Phone.module.scss';
import cn from 'classnames';

type PhoneProps = {
  phone: string;
  href: string;
  isHeader?: boolean;
};

function Phone({ phone, href, isHeader }: PhoneProps) {
  return (
    <div className={cn([styles['phone']], {[styles['phone__wrapper-header']]: isHeader})}>
      {<a className={styles.phone} href={`tel:+${href}`}>
      {!isHeader && <OldPhoneIcon />}
      {isHeader && <PhoneIcon />}
      {!isHeader && phone}
      </a>}
    </div>
  );
}

export default Phone;
