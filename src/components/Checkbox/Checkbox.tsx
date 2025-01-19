import { useState } from 'react';
import styles from '../Checkbox/Checkbox.module.scss';

export type CheckboxProps = {
    id: string;
    label: string;
    value: string;
    checked: boolean;
    onChange(e: any): void;
    isColumn?: boolean;
}

function Checkbox({ id, label, value, onChange, isColumn = true }: CheckboxProps) {
    const [checked, setChecked] = useState(true);
    return (
        <div className={styles['picker__checkbox-button']}>
            <input
                className={styles['picker__checkbox-default']}
                id={id}
                type="checkbox"
                value={value}
                onChange={(e) => { onChange(e); setChecked(!checked) }}
                checked={checked}
            />
            <label className={isColumn ? styles['picker-column__checkbox-label'] : styles['picker__checkbox-label']} htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default Checkbox;