import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import dayjs, { Dayjs } from 'dayjs';
import { pickersLayoutClasses } from '@mui/x-date-pickers';
import { ruRU } from '@mui/x-date-pickers/locales';
import { DateRange } from '@mui/x-date-pickers-pro';

export type ReactDateRangeProps = {
  onChangeDateValue: any;
}

function ReactDateRange({ onChangeDateValue }: ReactDateRangeProps) {

  const [value, setValue] = React.useState<DateRange<Dayjs>>([
    dayjs('2024-10-17'),
    dayjs('2024-10-24'),
  ]);

  const onDateChange = (evt: DateRange<dayjs.Dayjs>) => {
    setValue(evt)
  }

  console.log(' value = ' + value);
  console.log(' value1  = ' + value[0]?.toDate());
  console.log(' value2  = ' + value[1]?.toDate());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'de'} localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
      <StaticDateRangePicker
        value={value}
        onChange={onDateChange}
        defaultValue={[dayjs('2024-10-07'), dayjs('2024-10-16')]}
        sx={{
          [`.${pickersLayoutClasses.contentWrapper}`]: {
            alignItems: 'center',
          },
        }}
        showDaysOutsideCurrentMonth={true}
        displayStaticWrapperAs={"mobile"}

        localeText={{ start: 'Check-in', end: 'Check-out' }}
        reduceAnimations={true}
        fixedWeekNumber={5}
        disablePast={true}
      />
    </LocalizationProvider>
  );
}

export default ReactDateRange;
