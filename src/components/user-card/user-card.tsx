import styles from './user-card.module.scss';
import TitleSecondary from '../../ui/title-secondary/title-secondary';
import Plain from '../../ui/plain/plain';
import Bus from '../../ui/bus/bus';
import Walk from '../../ui/walk/walk';
import Bicycle from '../../ui/bicycle/bicycle';
import Like from '../../ui/like/like';
import smolov from '../../images/smolov.jpg';
import { CountryType } from '../../types/country';

type UserCardProps = {
  name: string;
  transport: string[];
  tags: string[];
  countries: CountryType[];
};

function UserCard(props: UserCardProps) {
  const { name, countries, transport, tags } = props;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={smolov} alt='Аватар' />
      </div>
      <div className={styles.person}>
        <TitleSecondary level='4' text={name} />
        <div className={styles.likes}>170</div>
      </div>
      <p className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={`${tag}-${index}`}>#{tag} </span>
        ))}
      </p>
      <button className={styles.button}>Позвать!</button>
      <div className={styles.rating}>
        <Like />
      </div>
      <div className={styles.countries}>
        <ul className={styles.list}>
          {countries.map((country) => (
            <li className={styles.item} key={country.name}>
              <div className={styles.flag}>
                <img
                  src={country.flag}
                  alt={country.name}
                  width={35}
                  height={24}
                />
              </div>
              <p className={styles.text}>{country.name}</p>
              <span className={styles.tolltip}>{country.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.info}>
        <ul className={styles.infolist}>
          <li className={styles.plainitem}>
            <Plain isActive={transport.includes('airplanу')} />
          </li>
          <li className={styles.busitem}>
            <Bus isActive={transport.includes('bus')} />
          </li>
          <li className={styles.veloitem}>
            <Bicycle isActive={transport.includes('velo')} />
          </li>
          <li className={styles.walkitem}>
            <Walk isActive={transport.includes('pedestrian')} />
          </li>
        </ul>
        <div className={styles.level}>
          <span className={styles.number}>25</span>
          <span className={styles.description}>level</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
