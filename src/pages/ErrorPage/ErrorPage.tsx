import { useAppDispatch } from '../../hooks';
import {
  fetchEuropeAction,
  fetchAsiaAction,
} from '../../store/api-actions';
import Logo from '../../components/Logo/Logo';
import Address from '../../components/Address/Address';
import Social from '../../components/Social/Social';
import PhoneList from '../../components/PhoneList/PhoneList';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <Logo classes={styles.logo} />
          <Address classes={styles.address} />
          <PhoneList classes={styles.phone} isHeader />
          <Social classes={styles.social} />
        </div>
        <section className={styles.error}>
          <p className={styles['error__text']}>Ошибка загрузки</p>
          <button
            onClick={() => {
              dispatch(fetchEuropeAction());
              dispatch(fetchAsiaAction());
            }}
            className={styles['error__button']}
          >
            Попробуйте ещё раз
          </button>
        </section>
      </div>
    </>
  );
}

export default ErrorPage;
