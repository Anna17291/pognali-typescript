import Paragraph from '../../ui/parahraph/paragraph';
import TitleSecondary from '../../ui/title-secondary/title-secondary';
import styles from './StepHeader.module.scss';
import cn from 'classnames';

type StepProps = {
  title: string;
  explanation: string;
  stepnumber: string;
  className?: string;
};

function StepHeader({ title, explanation, stepnumber, className }: StepProps) {
  return (
      <div className={cn(styles.step__header, className)}>
        <div>
        <TitleSecondary text={title} level={'3'} />
        <Paragraph text={explanation} />
        </div>
        <ul className={styles.step__points}>
          <li className={cn(styles.step__item, {[styles['step__item--active']]: (({stepnumber}['stepnumber'].toString()) === '1')})}>Даты</li>
          <li className={cn(styles.step__item, {[styles['step__item--active']]: (({stepnumber}['stepnumber'].toString()) === '2')})}>Маршрут</li>
          <li className={cn(styles.step__item, {[styles['step__item--active']]: (({stepnumber}['stepnumber'].toString()) === '3')})}>Развлечения</li>
        </ul>
      </div>
  );
}

export default StepHeader;
