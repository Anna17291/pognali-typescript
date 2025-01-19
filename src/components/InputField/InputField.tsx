import styles from './InputField.module.scss';

type InputFieldProps = {
    label: string;
    type: string;
    value: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
    min?: number;
    max?: number;
    className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   type,
                                                   value,
                                                   onChange,
                                                   placeholder = '',
                                                   required = false,
                                                   error = '',
                                                   min,
                                                   max,
                                                   className = '',
                                               }) => {
    return (
        <div className={`form-group ${className} ${error ? 'has-error' : ''}`}>
            <label>{label}{required && '*'}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)} // Изменение: передаем строку или число
                placeholder={placeholder}
                required={required}
                min={min}
                max={max}
                className="input-field"
            />
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default InputField;
