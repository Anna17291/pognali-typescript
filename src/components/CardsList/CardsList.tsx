import UserCard from '../user-card/user-card';
import { DataType } from '../../types/card-list-type';
import styles from './CardsList.module.scss';

type CardsListProps = {
  cards: DataType[];
};

function CardsList({ cards }: CardsListProps) {
  return (
    <ul className={styles.cardslist}>
      {cards.map((card) => (
        <li key={card.name} className={styles.cardname}>
          <UserCard
            name={card.name}
            tags={card.tags}
            countries={card.countries}
            transport={card.transport}
          />
        </li>
      ))}
    </ul>
  );
}

export default CardsList;
