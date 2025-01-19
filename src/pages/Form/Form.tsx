import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import styles from './Form.module.scss';
import TitlePrimary from '../../ui/TitlePrimary/TitlePrimary';
import Avatar from '../../ui/Avatar/Avatar';
import userpic from '../../images/userpic_desktop.jpg';
import ProgressCircle from '../../ui/ProgressCircle/ProgressCircle';
import LightButton from '../../components/LightButton/LightButton';
import TravelForm from '../../components/TravelForm/TravelForm';
import { useEffect } from 'react';
import { isBrowser, isMobile } from 'react-device-detect'


function Form() {

  useEffect(() => {
    if (isBrowser){
    document.body.style.setProperty("--scrollbar-width", `${window.innerWidth - document.body.clientWidth}px`);
    }
    if (isMobile){
      document.body.style.setProperty("--scrollbar-width", '0.001px');
      }  
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>ПОГНАЛИ! Форма</title>
      </Helmet>
      <div  className={styles.form__wrapper}>
      
        <div className={styles.form__destination}>
          <TitlePrimary
            text='НАПРАВЛЕНИЯ'
            level={1}
            className='form__heading'
          />
          <div className={styles.form__user}>
            <ProgressCircle
              progress={80}
              size={95}
              strokeWidth={3}
              strokeColor='#4D99D6'
              trailColor='transparent'
              className='form__progress'
            />
            <Avatar
              imageUrl={userpic}
              altText='Это вы'
              size='large'
              className='form__avatar'
            />
            <LightButton
              text='Сменить фото'
              link='#'
              className='form__change-photo'
            />
          </div>
        </div>

        <TravelForm />

      </div>
    </Layout>
  );
}

export default Form;

