import styles from './HeroMain.module.scss';
import desktop from '../../images/HeroMain/heromain-bg-desktop.png';
import desktop2x from '../../images/HeroMain/heromain-bg-desktop@2x.png';
import tablet from '../../images/HeroMain/heromain-bg-tablet.png';
import mobile from '../../images/HeroMain/heromain-bg-mobile.png';
import traveller from '../../images/HeroMain/traveller-desktop.png';
import traveller2x from '../../images/HeroMain/traveller-desktop@2x.png';
import travellerTab from '../../images/HeroMain/traveller-tablet.png';
import travellerMob from '../../images/HeroMain/traveller-mobile.png';

function HeroMain() {

  return (
    <section className={styles.heromain__wrapper}>
      <div className={styles.heromain__slogan}>В путешествие с крутыми попутчиками! </div>
      <picture>
        <source media="(max-width: 320px)" srcSet={mobile} width="320" height="888" />
        <source media="(max-width: 768px)" srcSet={tablet} width="768" height="906" />
        <img src={desktop} srcSet={desktop2x} width="1440" height="742" alt="Планета земля" />
      </picture>
      <div className={styles.heromain__traveller}>
        <picture>
          <source media="(max-width: 479px)" srcSet={travellerMob} width="192" height="255" />
          <source media="(max-width: 999px)" srcSet={travellerTab} width="437" height="530" />
          <img src={traveller} srcSet={traveller2x} width="431" height="640" alt="Планета земля" />
        </picture>
      </div>
    </section>
  );
}

export default HeroMain;
