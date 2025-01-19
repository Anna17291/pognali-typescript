import styles from './continents-list.module.scss';
import { MouseEvent } from 'react';

type ContinentsListProps = {
  onRegionSelect: (value: string) => void;
}

function ContinentsList({ onRegionSelect }: ContinentsListProps) {
  const onRegionClick = (evt: MouseEvent<HTMLUListElement>) => {
    if (
      !(evt.target instanceof HTMLButtonElement) ||
      !evt.target.dataset.region
    ) {
      return;
    }
    onRegionSelect(evt.target.dataset.region);
  };

  return (
    <ul className={styles.continents} onClick={onRegionClick}>
      <li>
        <button className={styles.button__continent} data-region='europe'>Европа</button>
      </li>
      <li>
        <button className={styles.button__continent} data-region='asia'>Азия</button>
      </li>
      <li>
        <button className={styles.button__continent} data-region='americas'>Америка</button>
      </li>
      <li>
        <button className={styles.button__continent} data-region='oceania'>Острова</button>
      </li>
    </ul>
  )
}

export default ContinentsList;
