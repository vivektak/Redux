import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {
    Button,
} from "@material-ui/core";
import DatePicker from './DatePicker';

const Header = ({ selectedEndDate, selectedStartDate, handleEndDateChange, handleStartDateChange, handleReset }) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <DatePicker selectedDate={selectedStartDate} handleDateChange={handleStartDateChange} dateLabel='Start Date' />
                <DatePicker selectedDate={selectedEndDate} handleDateChange={handleEndDateChange} dateLabel='End Date' />
                <Button
                    onClick={() => handleReset()}
                    color="secondary"
                    variant="contained"
                >Reset</Button>
            </Grid>

        </MuiPickersUtilsProvider>
    );
}

export default Header;