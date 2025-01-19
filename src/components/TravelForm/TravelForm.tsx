import React, { useRef, useEffect } from 'react';
import HashtagInput from '../HashtagInput/HashtagInput';
import styles from './TravelForm.module.scss';
import stepHeaderStyles from '../StepHeader/StepHeader.module.scss';
import airplaneIcon from '../../images/transport/icon_plane.svg';
import busIcon from '../../images/transport/icon_bus.svg';
import veloIcon from '../../images/transport/icon_bicycle.svg';
import pedestrianIcon from '../../images/transport/icon_pedestrian.svg';
import StepHeader from '../StepHeader/StepHeader';
import { InputNumber } from 'primereact/inputnumber';
import useState from 'react-usestateref';
import Checkbox from '../../components/Checkbox/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import { pickersLayoutClasses } from '@mui/x-date-pickers';
import { ruRU } from '@mui/x-date-pickers/locales';
import { DateRange } from '@mui/x-date-pickers-pro';
import { CountryType } from '../../types/country';
import Ways from '../ways/ways';
import {
    SUBMIT_BUTTON,
    SUBMIT_BUTTON_SENDING,
    Status,
    AppRoute,
} from '../../const';
import Button from '../../ui/Button/Button';
import Tooltip from '../../ui/Tooltip/Tooltip';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { postTravelPlanAction } from '../../store/api-actions';
import { getTravelPlanPostingStatus } from '../../store/card-data/card-data.selectors';
import { resetTravelPlanPostingStatus } from '../../store/card-data/card-data';
import cn from 'classnames';

interface TravelPlan {
    tags: string[];
    transport: string[];
    travelers: number;
    isBaby: boolean;
    duration: number;
    travelDateStart: string;
    travelDateEnd: string;
    countries: string[];
    events: { country: string; description: string }[];
}

const TravelForm: React.FC = () => {

    //паддинги для шага 2
    const [isListOpen, setListOpen] = useState<boolean>(false);
    //конец
    const [tooltip, setTooltip] = useState({
        visible: false,
        text: '',
        position: { x: 0, y: 0 },
    });
    const [travelersValue, setTravelersValue] = useState(0); // Следим за значением инпута
    const [durationValue, setDurationValue] = useState(6); // Следим за значением инпута
    const [babyValue, setBabyValue] = useState(true); // Следим за значением чекбокса
    const [rangeValue, setRangeValue, rangeValueRef] = useState<DateRange<Dayjs>>(
        [dayjs().add(3, "days"), dayjs().add(8, "days")]
    );
    const [step, setStep] = useState(0);
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);
    const [travelPlan, setTravelPlan, travelPlanRef] = useState<TravelPlan>({
        tags: ['#party'],
        transport: ['velo'] as Array<'airplane' | 'bus' | 'velo' | 'pedestrian'>,
        travelers: 2,
        isBaby: false,
        duration: 6,
        travelDateStart: dayjs().add(3, "days").format('YYYY-MM-DD'),
        travelDateEnd: dayjs().add(8, "days").format('YYYY-MM-DD'),
        countries: [],
        events: [],
    });

    let diffInDays = 6;

    const [selectedCountries, setSelectedCountries] = useState<
        CountryType[] | []
    >([]);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const postingStatus = useAppSelector(getTravelPlanPostingStatus);

    const transportOptions: Array<'airplane' | 'bus' | 'velo' | 'pedestrian'> = [
        'airplane',
        'bus',
        'velo',
        'pedestrian',
    ];

    const transportIcons = {
        airplane: airplaneIcon,
        bus: busIcon,
        velo: veloIcon,
        pedestrian: pedestrianIcon,
    };

    const transportNames: Record<
        'airplane' | 'bus' | 'velo' | 'pedestrian',
        string
    > = {
        airplane: 'Авиаперелет',
        bus: 'Автотранспорт',
        velo: 'Велосипед',
        pedestrian: 'Пешком',
    };

    const toggleTransport = (transport: string) => {
        const updatedTransport = travelPlan.transport.includes(transport)
            ? travelPlan.transport.filter((t) => t !== transport)
            : [...travelPlan.transport, transport];
        setTravelPlan({ ...travelPlan, transport: updatedTransport });
    };

    const handleMouseEnter = (
        e: React.MouseEvent<HTMLDivElement>,
        transport: keyof typeof transportNames
    ) => {
        const target = e.currentTarget.getBoundingClientRect();

        setTooltip({
            visible: true,
            text: transportNames[transport],
            position: {
                x: target.left + target.width / 2,
                y: target.top + window.scrollY - 40,
            },
        });
    };

    const handleMouseLeave = () => {
        setTooltip({
            visible: false,
            text: '',
            position: { x: 0, y: 0 },
        });
    };

    const handleInputChangeTravelers = (value: number, name = 'travelers') => {
        setTravelPlan({ ...travelPlan, [name]: value });
    };

    const handleInputChangeDuration = (value: number, name = 'duration') => {
        setTravelPlan({ ...travelPlan, [name]: value });
    };

    const onCheckHandler = (value: boolean, name = 'duration') => {
        setTravelPlan({ ...travelPlan, [name]: value });
    };

    function getDays(dateStart: any, dateEnd: any) {
        let currentDate = dateStart,
            dates = [];
        while (currentDate <= dateEnd) {
            dates.push(currentDate);
            let d = new Date(currentDate.valueOf());
            d.setDate(d.getDate() + 1);
            currentDate = d;
        }
        return dates.length;
    }

    const onChangeDataRange = (
        evt: DateRange<dayjs.Dayjs>,
        start = 'travelDateStart',
        end = 'travelDateEnd'
    ) => {
        setRangeValue(evt);
        setTravelPlan({
            ...travelPlan,
            [start]: String(rangeValueRef.current[0]?.format('YYYY-MM-DD')),
            [end]: String(rangeValueRef.current[1]?.format('YYYY-MM-DD')),
        });
        console.log(' value1  = ' + rangeValueRef.current[0]?.format('DD.MM.YYYY'));
        console.log(' value2  = ' + rangeValueRef.current[1]?.format('DD.MM.YYYY'));
        diffInDays = Number(getDays(dayjs(rangeValueRef.current[0]?.format('YYYY-MM-DD')), dayjs(rangeValueRef.current[1]?.format('YYYY-MM-DD'))));
        console.log('diffInDays=' + diffInDays);
        console.log('current date = ' + dayjs().format('YYYY-MM-DD'));
        console.log('current date + 3 дн = ' + dayjs().add(3, "days").format('YYYY-MM-DD'));
        setTravelPlan({ ...travelPlan, 'duration': Number(diffInDays) });
        setDurationValue(diffInDays);
    };

    const handleHashtagChange = (tags: string[]) => {
        setTravelPlan({ ...travelPlan, tags });
    };

    const handleEventChange = (index: number, description: string) => {
        const updatedEvents = [...travelPlan.events];
        updatedEvents[index] = {
            country: travelPlan.countries[index],
            description,
        };
        setTravelPlan({ ...travelPlan, events: updatedEvents });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(
            ' travelPlanRef.current = ' + JSON.stringify(travelPlanRef.current)
        );
        e.preventDefault();
        dispatch(postTravelPlanAction(travelPlan));
    };

    useEffect(() => {
        if (postingStatus === Status.Success) {
            dispatch(resetTravelPlanPostingStatus());
            navigate(AppRoute.Catalog);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postingStatus]);

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const scrollToStep = (step: number) => {
        if (step === 0 && step1Ref.current) {
            step1Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (step === 1 && step2Ref.current) {
            step2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (step === 2 && step3Ref.current) {
            step3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        scrollToStep(step);
    }, [step]);

    const handleStep2 = () => {// Не нужно удалять:  добавляет выбранные страны в travelPlan для отправки на сервер
        setTravelPlan((prev) => ({
            ...prev,
            countries: selectedCountries.map((country) => country.name),
        }));
        handleNextStep();
    };

    const handleCountrySelect = (country: CountryType) => {
        if (
            selectedCountries.some(
                (selectedCountry) => country.name === selectedCountry.name
            )
        ) {
            return;
        }
        setSelectedCountries((prev) => [...prev, country]);
    };

    const handleRemove = (countryToRemove: string) => {
        setSelectedCountries((prev) =>
            prev.filter((country) => country.name !== countryToRemove)
        );
    };

    return (
        <div>
            <div className={styles.travelform}>
                <div className={styles.travelform__required}>
                    <HashtagInput
                        value={travelPlan.tags}
                        onChange={handleHashtagChange}
                        className='form__hashtag'
                    />
                    <div className={styles.transportOptions}>
                        <p className={styles.transportLabel}>ТРАНСПОРТ</p>
                        {transportOptions.map((option) => (
                            <div
                                key={option}
                                className={`${styles.transportOption} ${travelPlan.transport.includes(option) ? styles.active : ''
                                    }`}
                                onClick={() => toggleTransport(option)}
                                onMouseEnter={(e) => handleMouseEnter(e, option)}
                                onMouseLeave={handleMouseLeave}
                                tabIndex={0}
                            >
                                <img
                                    src={transportIcons[option]}
                                    alt={option}
                                    className={`${styles.transportIcon} ${travelPlan.transport.includes(option)
                                        ? styles.activeIcon
                                        : ''
                                        }`}
                                />
                            </div>
                        ))}
                    </div>

                    <Tooltip
                        text={tooltip.text}
                        visible={tooltip.visible}
                        position={tooltip.position}
                    />
                </div>
                <form onSubmit={handleSubmit} className={styles.travelform__steplist}>
                    <p className={styles.travelform__heading}>Добавить план:</p>

                    {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div ref={step1Ref} className={styles.form__step}>
                        <StepHeader
                            title='Шаг 1. Даты пребывания'
                            explanation='Укажите предпочтительное количество попутчиков, которых
вы&nbsp;хотели&nbsp;бы позвать в&nbsp;поездку, и&nbsp;ее&nbsp;предполагаемую длительность.'
                            stepnumber='1'
                        />

                        <div className={styles.one__wrapper}>
                            <div className={styles.one__pluslist}>
                                <div className={styles.one__plusitem}>
                                    <span className={styles.one__plusdefinition}>
                                        Ищу попутчиков:
                                    </span>
                                    <InputNumber className={styles.one__plusbutton}
                                        max={10}
                                        min={1}
                                        value={travelersValue}
                                        onValueChange={(e: any) => {
                                            setTravelersValue(e.value);
                                            handleInputChangeTravelers(e.value);
                                        }}
                                        showButtons
                                        buttonLayout='horizontal'
                                        style={{ width: '4rem' }}
                                        decrementButtonClassName='p-button-secondary'
                                        incrementButtonClassName='p-button-secondary'
                                        incrementButtonIcon='pi pi-plus'
                                        decrementButtonIcon='pi pi-minus'
                                    />
                                    <span className={styles.one__plusmeasure}>Чел.</span>
                                </div>
                                <div className={styles.one__plusitem}>
                                    <span className={styles.one__plusdefinition}>
                                        Длительность:
                                    </span>
                                    <InputNumber className={styles.one__plusbutton}
                                        max={31}
                                        min={2}
                                        value={durationValue}
                                        onValueChange={(e: any) => {
                                            setDurationValue(e.value);
                                            handleInputChangeDuration(e.value);
                                        }}
                                        showButtons
                                        buttonLayout='horizontal'
                                        style={{ width: '4rem' }}
                                        decrementButtonClassName='p-button-secondary'
                                        incrementButtonClassName='p-button-secondary'
                                        incrementButtonIcon='pi pi-plus'
                                        decrementButtonIcon='pi pi-minus'
                                    />
                                    <span className={styles.one__plusmeasure}>Дн.</span>
                                </div>
                            </div>

                            <div className={styles.one__checkbox}>
                                <Checkbox
                                    id={'#check'}
                                    label={'Можно с детьми'}
                                    value={'isBaby'}
                                    checked={babyValue}
                                    onChange={(e: any) => {
                                        setBabyValue(e.value);
                                        onCheckHandler(e.target.checked);
                                    }}
                                />
                            </div>
                        </div>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale={'ru'}
                            localeText={
                                ruRU.components.MuiLocalizationProvider.defaultProps.localeText
                            }
                        >
                            <StaticDateRangePicker
                                defaultValue={[dayjs().add(3, "days"), dayjs().add(8, "days")]}
                                sx={{
                                    [`.${pickersLayoutClasses.contentWrapper}`]: {
                                        alignItems: 'center',
                                    },
                                }}
                                showDaysOutsideCurrentMonth={true}
                                displayStaticWrapperAs={'mobile'}
                                localeText={{ start: 'Check-in', end: 'Check-out' }}
                                reduceAnimations={true}
                                fixedWeekNumber={6}
                                disablePast={true}
                                onChange={(evt: DateRange<dayjs.Dayjs>) => {
                                    onChangeDataRange(evt);
                                }}
                                value={rangeValue}
                                disableAutoMonthSwitching={true}
                                maxDate={dayjs('2026-01-01')}
                                slotProps={{
                                    toolbar: { toolbarFormat: 'DD.MM.YYYY', hidden: false },
                                }}
                            />
                        </LocalizationProvider>

                        <button
                            className={styles.travelform__nextbutton}
                            type='button'
                            onClick={() => {
                                handleNextStep(); // Переход к следующему шагу и прокрутка
                            }}
                        >
                            Следующий шаг
                        </button>
                    </div>

                    {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {step >= 1 /*&& areDatesSelected*/ && (
                        <div ref={step2Ref} /*className={styles.form__step}>*/
                            //паддинги для шага2
                            className={cn(styles.form__step, {
                                [styles['form__step--open']]: (isListOpen),
                            })}>

                            <StepHeader
                                title='Шаг 2. Маршрут'

                                explanation='Укажите предпочтительное количество попутчиков,
                                которых вы&nbsp;хотели&nbsp;бы позвать в&nbsp;поездку, и&nbsp;ее&nbsp;предполагаемую длительность.'

                                stepnumber='2'
                            />
                            <Ways
                                onCountryRemove={handleRemove}
                                onCountrySelect={handleCountrySelect}
                                selectedCountries={selectedCountries}
                                //паддинги для шага2
                                setListOpen={setListOpen}
                            //конец
                            />
                            <div className={styles.travelform__buttons}>
                                <button
                                    className={styles.travelform__nextbutton}
                                    type='button'
                                    onClick={
                                        handleStep2
                                        /*() => { handleNextStep(); // Переход к следующему шагу и прокрутка}*/
                                    }
                                >
                                    Следующий шаг
                                </button>
                                <button
                                    className={styles.travelform__prevbutton}
                                    type='button'
                                    onClick={() => {
                                        handlePrevStep();
                                        scrollToStep(step - 1);
                                    }}
                                >
                                    На шаг назад
                                </button>
                            </div>
                        </div>
                    )}
                    {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {step >= 2 && selectedCountries.length > 0 && (
                        <div
                            ref={step3Ref}
                            className={`${styles.travelform__step} ${styles.travelform__step1}`}
                        >
                            <StepHeader
                                title='Шаг 3. Развлечения'
                                explanation='Наконец, расскажите о своих планах времяпровождения. Можно&nbsp;писать&nbsp;в&nbsp;свободной форме и ставить тэги.'
                                stepnumber='3'
                                className={stepHeaderStyles.stepheader__third}
                            />
                            {selectedCountries.map((country, index) => (
                                <div
                                    key={index}
                                    className={`${styles.travelform__inner} ${index === 0 ? styles.first : ''
                                        }`}
                                >
                                    <img
                                        src={country.flag}
                                        alt={`Флаг ${country.name}`}
                                        className={`${styles.travelform__flag} ${styles.countryIcon}`}
                                    />
                                    <h4 className={styles.travelform__country}>{country.name}</h4>
                                    <textarea
                                        name='events'
                                        maxLength={200}
                                        placeholder='План действий'
                                        className={styles.travelform__textarea}
                                        value={
                                            travelPlan.events[index]
                                                ? travelPlan.events[index].description
                                                : ''
                                        }
                                        onChange={(e) => handleEventChange(index, e.target.value)}
                                    />
                                </div>
                            ))}
                            <span className={styles.travelform__footer}>
                                <Button
                                    text={
                                        postingStatus !== Status.Pending
                                            ? SUBMIT_BUTTON
                                            : SUBMIT_BUTTON_SENDING
                                    }
                                    apperance='heaven'
                                    type='submit'
                                />
                                <button
                                    type='button'
                                    onClick={() => {
                                        handlePrevStep();
                                        scrollToStep(step - 1);
                                    }}
                                    className={styles.travelform__back}
                                >
                                    На шаг назад
                                </button>
                            </span>
                            {postingStatus === Status.Error && (
                                <>
                                    <p>Упс... Произошла ошибка при отправке</p>
                                    <p>
                                        Убедитесь, что все поля заполнены корректно, и попробуйте
                                        еще раз
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default TravelForm;
