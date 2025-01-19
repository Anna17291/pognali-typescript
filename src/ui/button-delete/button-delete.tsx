import styles from './button-delete.module.scss';

type ButtonDeleteProps = {
  onDeleteButtonClick: () => void;
}

function ButtonDelete({onDeleteButtonClick}: ButtonDeleteProps) {

  return (
    <button onClick={onDeleteButtonClick} type='button' className={styles.button}></button>
  )
}

export default ButtonDelete;
