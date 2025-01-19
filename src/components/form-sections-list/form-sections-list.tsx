import styles from './form-sections-list.module.scss';

function FormSectionList() {
  return (
    <div className={styles.sections}>
      <ul className={styles.list}>
        <li className={styles.item}>Даты</li>
        <li className={styles.item}>Маршрут</li>
        <li className={styles.item}>Развлечения</li>
      </ul>
    </div >
  );
}

export default FormSectionList;