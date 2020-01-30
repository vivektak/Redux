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
                <DatePicker selectedStartDate={selectedStartDate} handleStartDateChange={handleStartDateChange} startDate='Start Date' />
                <DatePicker selectedEndDate={selectedEndDate} handleEndDateChange={handleEndDateChange} startDate='End Date' />
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