import React from 'react';
import styles from './CustomCheckbox.module.scss';
import checkIcon from '../../images/check_icon.svg';

interface CustomCheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
    value: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, label, name, value }) => {
    return (
        <label className={styles.checkboxLabel}>
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className={styles.checkboxInput}
            />
            <span className={styles.checkboxCustom}>
                {checked && <img src={checkIcon} alt="check icon" className={styles.checkIcon} />}
            </span>
            {label}
        </label>
    );
};

export default CustomCheckbox;
