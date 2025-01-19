
import { ChangeEvent, useState } from "react";
import styles from './PlusMinusInput.module.scss';

type PlusMinusInputProps = {
  classes?: string;
  name: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  value: number;
}

function PlusMinusInput({ classes, name, value, onChange }: PlusMinusInputProps) {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  let handleChange = (e: any) => {
    setNum(e.target.value);
  }

  return (
    <div className={styles.plus__wrapper} >
      <div className={styles.plus__group}>
        <button className={styles.plus__btn} type="button" onClick={decNum}>-</button>
      </div>
      <input type="number" min="1" value={num} className={styles.plus__input} onChange={(e) => { onChange(e); handleChange(e) }} />
      <div className={styles.plus__group}>
        <button className={styles.plus__btn} type="button" onClick={incNum}>+</button>
      </div>
    </div>


  );
}

export default PlusMinusInput;
