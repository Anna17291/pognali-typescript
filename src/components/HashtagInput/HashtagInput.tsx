import React, { useState } from 'react';
import styles from './HashtagInput.module.scss';

const HashtagInput: React.FC<{ value: string[]; onChange: (value: string[]) => void; className?: string }> = ({
                                                                                                                  value,
                                                                                                                  onChange,
                                                                                                                  className = '',
                                                                                                              }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;

        // Добавляем # перед каждым новым словом
        if (newValue.length > 0 && newValue[newValue.length - 1] === ' ') {
            const words = newValue
                .split(' ')
                .map((word) => (word && !word.startsWith('#') ? `#${word}` : word)) // Добавляем # перед новым словом
                .join(' '); // Соединяем обратно со всеми пробелами
            setInputValue(words);
        } else {
            setInputValue(newValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            const newTags = inputValue
                .trim()
                .split(' ')
                .filter(Boolean)
                .map((tag) => (tag.startsWith('#') ? tag : `#${tag}`)); // Убедиться, что каждый тег начинается с #
            onChange([...value, ...newTags]);
        }
    };

    const handleBlur = () => {
        if (inputValue.trim()) {
            const newTags = inputValue
                .trim()
                .split(' ')
                .filter(Boolean)
                .map((tag) => (tag.startsWith('#') ? tag : `#${tag}`));

            onChange([...value, ...newTags]);
            setInputValue(''); // Очистить поле ввода
        }
    };

    return (
        <div className={`${styles['hashtag-input']} ${className}`}>
            <label>ТЭГИ</label>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder="Коротко о себе в виде 5-8 хештегов"
            />
        </div>
    );
};

export default HashtagInput;
