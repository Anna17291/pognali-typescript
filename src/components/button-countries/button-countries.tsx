import styles from "./button-countries.module.scss";

type ButtonCountriesProps = {
  isShow?: boolean,
}

export default function ButtonCountries({ isShow }: ButtonCountriesProps) {

  return isShow ? (
    <button className={styles.headerbutton} >
      Фильтрация по странам:
    </button>
  ) : null
}
