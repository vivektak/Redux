import React from 'react';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = ({ selectedDate, handleDateChange, dateLabel }) => {
    return (
        <KeyboardDatePicker
            margin="normal"
            id="start-date-picker-dialog"
            label={dateLabel}
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
    );
}

export default DatePicker;