import styles from "./button-countries-close.module.scss";

type ButtonCountriesProps = {
  isShow?: boolean,
}

export default function ButtonCountriesClose({ isShow }: ButtonCountriesProps) {
  return !isShow ? (
    <button className={styles.headerbuttonclose} >
      фильтрация по странам:
    </button>
  ) : null;
}
