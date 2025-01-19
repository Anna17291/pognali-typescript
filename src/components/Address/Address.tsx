import cn from 'classnames';
import styles from './Address.module.scss';

type AddressProps = {
  classes?: string;
  onOpenMapClick?: () => void;
}

function Address({ classes, onOpenMapClick }: AddressProps) {
  return (
    <div className={cn(styles.wrapper, classes)}>
      <div className={styles['image-wrapper']}>
        {/* <img src={mapPoint} width='16' height='16' alt='Адрес на карте.' /> */}
      </div>
      <div>
        <p className={styles.address}>Брест, ул. Гоголя 2, офис 1</p>
        <button type='button' className={styles['map-button']} onClick={onOpenMapClick}>Посмотреть на карте</button>
      </div>
    </div>
  );
}

export default Address;
