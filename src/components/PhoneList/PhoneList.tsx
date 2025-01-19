import cn from 'classnames';
import Phone from '../Phone/Phone';
import { PHONES } from '../../const';
import styles from './PhoneList.module.scss';

type PhoneListProps = {
  classes?: string;
  isHeader?: boolean;
}

function PhoneList({ classes, isHeader }: PhoneListProps) {

  return (
    <div className={cn(styles.list, classes)}>
      {PHONES.map((phone, index) => (<Phone href='000000000' phone={phone} key={`phone-${index}`} isHeader={isHeader}/>))}
    </div>
  );
}

export default PhoneList;
