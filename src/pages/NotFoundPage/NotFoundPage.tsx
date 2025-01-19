import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>ПОГНАЛИ. Страница не найдена</title>
      </Helmet>
      <Layout>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Мы не нашли такую страницу</h1>
            <p className={styles.text}>
              Загляните в наш{' '}
              <Link className={styles.link} to={AppRoute.Catalog}>
                каталог
              </Link>
            </p>
          </div>
        </Layout>
    </>
  );
}

export default NotFoundPage;
