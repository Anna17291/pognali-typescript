import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import styles from './FilterForm.module.scss';
import airplaneIcon from '../../images/transport/icon_plane.svg';
import busIcon from '../../images/transport/icon_bus.svg';
import veloIcon from '../../images/transport/icon_bicycle.svg';
import pedestrianIcon from '../../images/transport/icon_pedestrian.svg';

const TravelCompanionForm: React.FC = () => {
    const [showHobbies, setShowHobbies] = useState<boolean>(false);
    const [showMusic, setShowMusic] = useState<boolean>(false);
    const [showFood, setShowFood] = useState<boolean>(false);
    const [showTransport, setShowTransport] = useState<boolean>(false);
    const [showLevel, setShowLevel] = useState<boolean>(false);
    const [selectedTransport, setSelectedTransport] = useState<string[]>([]);
    const [range, setRange] = useState<number[]>([0, 100]);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [music, setMusic] = useState<string[]>([]);
    const [food, setFood] = useState<string[]>([]);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1023);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSliderChange = (newRange: number[]) => {
        const roundedRange = newRange.map(value => Math.round(value));
        setRange(roundedRange);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newRange = [...range];
        const value = Math.round(Number(e.target.value));

        if (index === 0) {
            if (value <= newRange[1]) {
                newRange[0] = value;
            }
        } else {
            if (value >= newRange[0]) {
                newRange[1] = value;
            }
        }

        setRange(newRange);
    };

    const handleTransportClick = (transport: string) => {
        if (selectedTransport.includes(transport)) {
            setSelectedTransport(selectedTransport.filter((item) => item !== transport));
        } else {
            setSelectedTransport([...selectedTransport, transport]);
        }
    };

    const handleCheckboxChange = (value: string, stateSetter: React.Dispatch<React.SetStateAction<string[]>>, currentState: string[]) => {
        if (currentState.includes(value)) {
            stateSetter(currentState.filter((item) => item !== value));
        } else {
            stateSetter([...currentState, value]);
        }
    };

    return (
        <form className={styles.filterform}>
            <h1 className={styles.filterform__title}>Подберите идеального попутчика</h1>

            {/* Хобби */}
            <div className={styles.filterform__fieldset}>
                <h2
                    className={styles.filterform__subtitle}
                    onClick={() => setShowHobbies(!showHobbies)}
                >
                    Хобби
                    <button
                        type="button"
                        className={`${styles.toggleButton} ${showHobbies ? styles.upArrow : styles.downArrow}`}
                    />
                </h2>
                {(showHobbies || isTablet) && (
                    <div className={styles.filterform__check}>
                        <CustomCheckbox
                            label="Спортзал"
                            name="hobbies"
                            value="gym"
                            checked={hobbies.includes('gym')}
                            onChange={() => handleCheckboxChange('gym', setHobbies, hobbies)}
                        />
                        <CustomCheckbox
                            label="Кальян"
                            name="hobbies"
                            value="hookah"
                            checked={hobbies.includes('hookah')}
                            onChange={() => handleCheckboxChange('hookah', setHobbies, hobbies)}
                        />
                        <CustomCheckbox
                            label="Диван"
                            name="hobbies"
                            value="sofa"
                            checked={hobbies.includes('sofa')}
                            onChange={() => handleCheckboxChange('sofa', setHobbies, hobbies)}
                        />
                    </div>
                )}
            </div>

            {/* Музыка */}
            <div className={styles.filterform__fieldset}>
                <h2
                    className={styles.filterform__subtitle}
                    onClick={() => setShowMusic(!showMusic)}
                >
                    Музыка
                    <button
                        type="button"
                        className={`${styles.toggleButton} ${showMusic ? styles.upArrow : styles.downArrow}`}
                    />
                </h2>
                {(showMusic || isTablet) && (
                    <div className={styles.filterform__check}>
                        <CustomCheckbox
                            label="Тяжелый рок"
                            name="music"
                            value="rock"
                            checked={music.includes('rock')}
                            onChange={() => handleCheckboxChange('rock', setMusic, music)}
                        />
                        <CustomCheckbox
                            label="Русский рэп"
                            name="music"
                            value="rap"
                            checked={music.includes('rap')}
                            onChange={() => handleCheckboxChange('rap', setMusic, music)}
                        />
                        <CustomCheckbox
                            label="Евроденс"
                            name="music"
                            value="eurodance"
                            checked={music.includes('eurodance')}
                            onChange={() => handleCheckboxChange('eurodance', setMusic, music)}
                        />
                    </div>
                )}
            </div>

            {/* Еда */}
            <div className={styles.filterform__fieldset}>
                <h2
                    className={styles.filterform__subtitle}
                    onClick={() => setShowFood(!showFood)}
                >
                    Еда
                    <button
                        type="button"
                        className={`${styles.toggleButton} ${showFood ? styles.upArrow : styles.downArrow}`}
                    />
                </h2>
                {(showFood || isTablet) && (
                    <div className={styles.filterform__check}>
                        <CustomCheckbox
                            label="Мясоед"
                            name="food"
                            value="meat"
                            checked={food.includes('meat')}
                            onChange={() => handleCheckboxChange('meat', setFood, food)}
                        />
                        <CustomCheckbox
                            label="Сидит на ПП"
                            name="food"
                            value="pp"
                            checked={food.includes('pp')}
                            onChange={() => handleCheckboxChange('pp', setFood, food)}
                        />
                        <CustomCheckbox
                            label="Веган-сыроед"
                            name="food"
                            value="vegan"
                            checked={food.includes('vegan')}
                            onChange={() => handleCheckboxChange('vegan', setFood, food)}
                        />
                    </div>
                )}
            </div>

            {/* Транспорт с иконками */}
            <div className={styles.filterform__fieldset}>
                <h2
                    className={styles.filterform__subtitle}
                    onClick={() => setShowTransport(!showTransport)}
                >
                    Транспорт
                    <button
                        type="button"
                        className={`${styles.toggleButton} ${showTransport ? styles.upArrow : styles.downArrow}`}
                    />
                </h2>
                {(showTransport || isTablet) && (
                    <div className={styles.transportContainer}>
                        <div
                            className={`${styles.transportIcon} ${selectedTransport.includes('plane') ? styles.selected : ''}`}
                            onClick={() => handleTransportClick('plane')}
                        >
                            <img src={airplaneIcon} alt="Самолет" />
                        </div>
                        <div
                            className={`${styles.transportIcon} ${selectedTransport.includes('bus') ? styles.selected : ''}`}
                            onClick={() => handleTransportClick('bus')}
                        >
                            <img src={busIcon} alt="Автобус" />
                        </div>
                        <div
                            className={`${styles.transportIcon} ${selectedTransport.includes('bike') ? styles.selected : ''}`}
                            onClick={() => handleTransportClick('bike')}
                        >
                            <img src={veloIcon} alt="Велосипед" />
                        </div>
                        <div
                            className={`${styles.transportIcon} ${selectedTransport.includes('walk') ? styles.selected : ''}`}
                            onClick={() => handleTransportClick('walk')}
                        >
                            <img src={pedestrianIcon} alt="Пешком" />
                        </div>
                    </div>
                )}
            </div>

            {/* Левел с ползунком */}
            <div className={styles.filterform__fieldset}>
                <h2
                    className={styles.filterform__subtitle}
                    onClick={() => setShowLevel(!showLevel)}
                >
                    Левел
                    <button
                        type="button"
                        className={`${styles.toggleButton} ${showLevel ? styles.upArrow : styles.downArrow}`}
                    />
                </h2>
                {(showLevel || isTablet) && (
                    <div className={styles.levelContainer}>
                        <ReactSlider
                            className={styles.horizontalSlider}
                            min={0}
                            max={100}
                            value={range}
                            onChange={handleSliderChange}
                            renderThumb={(props, state) => (
                                <div {...props} className={styles.thumb}>
                                    {state.valueNow}
                                </div>
                            )}
                            renderTrack={(props, state) => (
                                <div {...props} className={styles.track} />
                            )}
                        />
                        <div className={styles.sliderValues}>
                            <input
                                type="number"
                                value={range[0]}
                                onChange={(e) => handleInputChange(e, 0)}
                                className={styles.sliderInput}
                                min={0}
                                max={100}
                            />
                            <input
                                type="number"
                                value={range[1]}
                                onChange={(e) => handleInputChange(e, 1)}
                                className={styles.sliderInput}
                                min={0}
                                max={100}
                            />
                        </div>
                    </div>
                )}
            </div>

            <button type="submit" className={styles.submitButton}>Показать</button>
        </form>
    );
};

export default TravelCompanionForm;
