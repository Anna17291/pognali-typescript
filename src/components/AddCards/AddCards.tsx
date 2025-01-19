import styles from "./AddCards.module.scss";

type AddCardsProps = {
  onMoreButtonClick: () => void;
}

function AddCards( {onMoreButtonClick }: AddCardsProps) {
  return (
    <div className={styles.container}>
      <button className={styles.button} type='button' onClick={onMoreButtonClick}>Показать еще</button>
    </div>
  );
}

export default AddCards