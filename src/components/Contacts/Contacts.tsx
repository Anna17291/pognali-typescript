import cn from 'classnames';
import Phone from '../Phone/Phone';
import Mail from '../Mail/Mail';
import styles from './Contacts.module.scss';
import { useResize } from '../../use-resize';

type ContactsProps = {
  classes?: string;
}

function Contacts({ classes }: ContactsProps) {
  const {isScreenXl} = useResize();
  return (
    
    <ul className={cn(styles.contacts__list, classes)}>
      <li>

        <div className={styles.contacts__link}>
          <Phone
            phone={'8 800 555-86-28'}  
            href={'88005558628'}
            isHeader={isScreenXl} />
        </div>
        
      </li>
      <li>
        <div className={styles.contacts__link}>
          <Mail
            mail={'mail@htmlacademy.ru'}  
            href={'mail@htmlacademy.ru'}
            isHeader={isScreenXl} />
        </div>
      </li>
    </ul>
  );
}

export default Contacts;


