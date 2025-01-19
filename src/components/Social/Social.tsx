import cn from 'classnames';
import VK from '../VK/VK';
import Youtube from '../Youtube/Youtube';
import Telegram from '../Telegram/Telegram';
import styles from './Social.module.scss';

type SocialProps = {
  classes?: string;
}

function Social({ classes }: SocialProps) {
  return (
    <ul className={cn(styles.social__list, classes)}>
       <li>
        <a className={styles.social__link} href='/'>
          <Telegram />
        </a>
      </li>
      <li>
        <a className={styles.social__link} href='/'>
          <VK />
        </a>
      </li>
      <li>
        <a className={styles.social__link} href='/'>
          <Youtube />
        </a>
      </li>
    </ul>
  );
}

export default Social;
