import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import HeroMain from '../../components/HeroMain/HeroMain';
import styles from './MainPage.module.scss';

function MainPage() {

  return (
    <Layout>
      <Helmet>
        <title>Погнали!</title>
      </Helmet>
      <h1 className={styles['visually-hidden']}>
        Сервис по подбору попутчиков.
      </h1>
      <HeroMain />
      {/* <UseResize /> */}
    </Layout>
  );
}

export default MainPage;
