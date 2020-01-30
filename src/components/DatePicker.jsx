import React from 'react';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = ({ selectedStartDate, handleStartDateChange, startDate }) => {
    return (
        <KeyboardDatePicker
            margin="normal"
            id="start-date-picker-dialog"
            label={startDate}
            format="MM/dd/yyyy"
            value={selectedStartDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
    );
}

export default DatePicker;